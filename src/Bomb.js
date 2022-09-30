import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super();
    this.state = { secondsLeft: props.initialCount };
  };

  // decrement = () => {
  //   const newSecondsLeft = this.state.secondsLeft - 1;
  //   this.setState({ secondsLeft: newSecondsLeft });
  // };

  render() {
    const msg = this.state.secondsLeft === 0 ? `Boom!` : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (
      <div>{msg}</div>
    )
  }

}

export default Bomb;