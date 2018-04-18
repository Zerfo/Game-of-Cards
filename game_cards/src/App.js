import React, { Component } from 'react';

import Game from './component/Game';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GameTabel: false
    };
  }

  startGame() {
    this.setState({
      GameTabel: true
    })
  }

  render() {
    const {GameTabel} = this.state;

    return ( GameTabel ?
        <div className="content">
          <Game />
        </div>
        :
        <div className="startWindow">
          <img src="/img/StartGame.png" alt=""/>
          <div className="bottomWindow">
            <div className="nameGame">MEMORY GAME</div>
            <a className="btnNewGame" onClick={() => this.startGame()}>Начать игру</a>
          </div>

        </div>
    );
  }
}

export default App;
