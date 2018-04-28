import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from './../utilities/helpers';

class TeamPicker extends React.Component {
  teamInput = React.createRef();

  goToTeam = e => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. Get the text from that input
    const teamName = this.teamInput.current.value;
    // 3. Change the page to /team/whatever-they-entered
    this.props.history.push(`/team/${teamName}`);
  };

  render() {
    return (
      <form className="team-selector" onSubmit={this.goToTeam}>
        <h2>Pick a Team</h2>
        <input type="text" ref={this.teamInput} required placeholder="Team Name" defaultValue={getFunName()} />
        <button type="submit">Visit Team</button>
      </form>
    );
  }
}

TeamPicker.propTypes = {
  history: PropTypes.object.isRequired,
};

export default TeamPicker;
