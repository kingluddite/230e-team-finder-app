import React from 'react';
import Header from './Header';
import Lineup from './Lineup';
import Roster from './Roster';
import samplePlayers from './../sample-data/sample-player-data';

class App extends React.Component {
  state = {
    players: {},
    // order: {},
  };

  addPlayer = player => {
    // 1. Take a copy of the existing state
    const players = { ...this.state.players };
    // 2. Add our new fish to that players variable
    players[`player${Date.now()}`] = player;
    // 3. Set the new players object to state
    this.setState({
      players,
    });
  };

  loadSamplePlayers = () => {
    this.setState({
      players: samplePlayers,
    });
  };

  render() {
    return (
      <div className="team-of-the-day">
        <div className="menu">
          <Header tagline="Soccer Stars" />
        </div>
        <Lineup />
        <Roster addPlayer={this.addPlayer} loadSamplePlayers={this.loadSamplePlayers} />
      </div>
    );
  }
}

export default App;
