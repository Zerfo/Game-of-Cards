import React, {Component} from 'react';

import '../style/Game.css';
import Cards from "./Cards";

export default class Game extends Component {
  constructor(props){
    super(props);

    this.state = {
      score: 0
    };
  }

  RefreshGame() {
    this.setState({
      score: 0
    });
    this.render();
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
        <Cards />
      </div>
    );
  }
}