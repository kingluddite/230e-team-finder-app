/* eslint react/prop-types: 0 */
import React from 'react';
import AddPlayerForm from './AddPlayerForm';

class Roster extends React.Component {
  render() {
    return (
      <div className="roster">
        <h2>Roster</h2>
        <AddPlayerForm addPlayer={this.props.addPlayer} />
        <button onClick={this.props.loadSamplePlayers}>Load Sample Players</button>
      </div>
    );
  }
}

export default Roster;
