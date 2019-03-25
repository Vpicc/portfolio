/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types';
import Style from './style.css';

class HelloMessage extends Component {
  constructor() {
    super();
    this.state = {
      classes: `${Style.hello} ${Style.helloTyping} display-4`,
    };

    this.typingIsDone = this.typingIsDone.bind(this);
  }

  typingIsDone() {
    const { handler } = this.props;
    this.setState({ classes: `${Style.hello} ${Style.helloDoneTyping} display-4` });
    handler();
  }

  render() {
    const { classes } = this.state;

    return (
      <h1 className={classes}>
        <Typist
          cursor={{ show: true, hideWhenDone: true, hideWhenDoneDelay: 0 }}
          onTypingDone={this.typingIsDone}
          avgTypingDelay={100}
        >
        Hello
          <Typist.Delay ms={600} />
        , I'm Victor.
        </Typist>
      </h1>
    );
  }
}

HelloMessage.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default HelloMessage;
