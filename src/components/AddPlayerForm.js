/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
  // static propTypes = {
  //   addPlayer: PropTypes.func,
  //   // addPlayer: PropTypes.string,
  // };

  // static defaultProps = {
  //   addPlayer() {},
  // };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createPlayer = e => {
    e.preventDefault();
    const player = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addPlayer(player);
    // refresh the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="player-edit" onSubmit={this.createPlayer}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
        <input type="text" name="price" ref={this.priceRef} placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Starter</option>
          <option value="unavailble">Substitute</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input type="text" name="image" ref={this.imageRef} placeholder="Image" />
        <button>Add Player</button>
      </form>
    );
  }
}

export default AddPlayerForm;
