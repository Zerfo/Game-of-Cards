import React, {Component} from 'react';

import '../style/Game.css';
import '../style/Cards.css';

export default class Game extends Component {
  map = [
    {
      style: "ace-crosses",
      count: 0
    },
    {
      style: "king-crosses",
      count: 0
    },
    {
      style: "lady-crosses",
      count: 0
    },
    {
      style: "jack-crosses",
      count: 0
    },
    {
      style: "ten-crosses",
      count: 0
    },
    {
      style: "nine-crosses",
      count: 0
    },
    {
      style: "eight-crosses",
      count: 0
    },
    {
      style: "seven-crosses",
      count: 0
    },
    {
      style: "six-crosses",
      count: 0
    },
    {
      style: "five-crosses",
      count: 0
    },
    {
      style: "four-crosses",
      count: 0
    },
    {
      style: "three-crosses",
      count: 0
    },
    {
      style: "two-crosses",
      count: 0
    },
    {
      style: "ace-spades",
      count: 0
    },
    {
      style: "king-spades",
      count: 0
    },
    {
      style: "lady-spades",
      count: 0
    },
    {
      style: "jack-spades",
      count: 0
    },
    {
      style: "ten-spades",
      count: 0
    },
    {
      style: "nine-spades",
      count: 0
    },
    {
      style: "eight-spades",
      count: 0
    },
    {
      style: "seven-spades",
      count: 0
    },
    {
      style: "six-spades",
      count: 0
    },
    {
      style: "five-spades",
      count: 0
    },
    {
      style: "four-spades",
      count: 0
    },
    {
      style: "three-spades",
      count: 0
    },
    {
      style: "two-spades",
      count: 0
    },
    {
      style: "ace-diamonds",
      count: 0
    },
    {
      style: "king-diamonds",
      count: 0
    },
    {
      style: "lady-diamonds",
      count: 0
    },
    {
      style: "jack-diamonds",
      count: 0
    },
    {
      style: "ten-diamonds",
      count: 0
    },
    {
      style: "nine-diamonds",
      count: 0
    },
    {
      style: "eight-diamonds",
      count: 0
    },
    {
      style: "seven-diamonds",
      count: 0
    },
    {
      style: "six-diamonds",
      count: 0
    },
    {
      style: "five-diamonds",
      count: 0
    },
    {
      style: "four-diamonds",
      count: 0
    },
    {
      style: "three-diamonds",
      count: 0
    },
    {
      style: "two-diamonds",
      count: 0
    },
    {
      style: "ace-hearts",
      count: 0
    },
    {
      style: "king-hearts",
      count: 0
    },
    {
      style: "lady-hearts",
      count: 0
    },
    {
      style: "jack-hearts",
      count: 0
    },
    {
      style: "ten-hearts",
      count: 0
    },
    {
      style: "nine-hearts",
      count: 0
    },
    {
      style: "eight-hearts",
      count: 0
    },
    {
      style: "seven-hearts",
      count: 0
    },
    {
      style: "six-hearts",
      count: 0
    },
    {
      style: "five-hearts",
      count: 0
    },
    {
      style: "four-hearts",
      count: 0
    },
    {
      style: "three-hearts",
      count: 0
    },
    {
      style: "two-hearts",
      count: 0
    }
  ];
  list = [];
  countDownCards = 0;
  countUpCards = 0;
  newScore = 0

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      stateList: this.list
    };

    this.generateList();
  }

  generateList() {
    let i = 0;
    do {
      let rand = Math.floor(Math.random() * (51 - 0) + 1);
      this.map[rand].count++;
      if (this.map[rand].count === 2) {
        this.list.push({style: this.map[rand].style, isPressed: false, id: i});
        this.list.push({style: this.map[rand].style, isPressed: false, id: i+1});
        i+=2;
      }
    } while (this.list.length !== 18);

    Array.prototype.shuffle = function (b) {
      var i = this.length, j, t;
      while (i) {
        j = Math.floor(( i-- ) * Math.random());
        t = b && typeof this[i].shuffle !== 'undefined' ? this[i].shuffle() : this[i];
        this[i] = this[j];
        this[j] = t;
      }
      return this;
    };

    this.list.shuffle(true);
  }

  ReverseCard(item, e) {
    if(this.countDownCards <= 2) {
      var updateList = this.state.stateList.map(it => {
        if (it.id === item.id) {
          if(it.isPressed === false){
            this.countDownCards += 1;
            this.countUpCards = this.list.length - this.countDownCards;
          } else {
            this.countDownCards = 0;
            this.countUpCards = 0;
          }
          return {...it, isPressed: !item.isPressed};
        } else return it;
      });
      this.setState({
        stateList: updateList
      });
      item.isPressed = true;
      this.countingScore(updateList, item);
    }
  };

  countingScore(updateList, item, e) {
    let score = this.state.score;
    let numID1, numID2;

    if (this.countDownCards === 2) {
      for (let key = 0; key < updateList.length; key++) {
        if(item.id === updateList[key].id) numID1 = key;
        // console.log("item.id:",item.id);
        // console.log("item.isPressed:", item.isPressed);
        // console.log("item.style:",item.style);
        // console.log("updateList[key].id:",updateList[key].id);
        // console.log("updateList[key].isPressed:",updateList[key].isPressed);
        // console.log("updateList[key].style:",updateList[key].style);
        if (item.id != updateList[key].id && item.isPressed == true && updateList[key].isPressed == true && item.style == updateList[key].style) {
          this.newScore = score + this.countUpCards * 42;
          numID2 = key;

          //console.log(this.newScore);
        }
        if(item.id != updateList[key].id && item.isPressed == true && updateList[key].isPressed == true && item.style != updateList[key].style) {
          this.newScore = score - this.countUpCards * 42;
          if (this.newScore < 0) this.newScore = 0;
          console.log(this.newScore);
        }

        //console.log("------------------------------------------------------------------------------------------");
      }
      setTimeout(() => {
        if(score < this.newScore){
          updateList[numID1].style = "none";
          updateList[numID2].style = "none";
        }
      },1000);

      setTimeout(() => {
        for (let i in updateList) {
          if (updateList[i].isPressed !== false)
            updateList[i].isPressed = false;
        }
        this.setState({
          score: this.newScore,
          stateList: updateList
        });
      }, 1500);
      this.countDownCards = 0;
    }
  }

  RefreshGame() {
    for(let i = 0; i < this.map.length; i++){ this.map[i].count = 0; }
    this.list = [];

    this.generateList();

    this.setState({
      score: 0,
      stateList: this.list
    });
    this.countDownCards = 0;
    this.countUpCards = 0;
  }

  render() {
    return (
      <div className="game">
        <header>
          <div className="refresh">
            <a className="btnRefGame" onClick={() => this.RefreshGame()}>Начать заново</a>
          </div>
          <div className="score">
            Очки:&nbsp;&nbsp;&nbsp;{this.state.score}
          </div>
        </header>
        <div className="cards">
          {
            this.state.stateList.map(item => {
              let boundItemClick = this.ReverseCard.bind(this, item, item.id);
              return <div key={item.id}
                          className={`card ${item.isPressed ? item.style : item.style !== 'none' ? 'back-card': 'none'}`}
                          onClick={boundItemClick}>
              </div>
            }
          )}
        </div>
      </div>
    );
  }
}