import React, { Component } from 'react';
import Foreground from '../Foreground/Foreground';
import HelloMessage from '../HelloMessage/HelloMessage';
// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
