import React, { Component } from 'react';
import Foreground from '../Foreground/Foreground';
import HelloMessage from '../HelloMessage/HelloMessage';

class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      doneWriting: false,
    };
    this.isDoneWriting = this.isDoneWriting.bind(this);
  }

  isDoneWriting() {
    this.setState({ doneWriting: true });
  }

  render() {
    const { doneWriting } = this.state;

    return (
      <>
        <Foreground doneWriting={doneWriting} />
        <HelloMessage handler={this.isDoneWriting} />
      </>
    );
  }
}

export default SplashScreen;
