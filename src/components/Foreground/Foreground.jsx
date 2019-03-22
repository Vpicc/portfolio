import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';


class Foreground extends Component {
  constructor() {
    super();
    this.state = {
      classes: `${Style.foreground}`,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { doneWriting } = nextProps;
    if (doneWriting === true) {
      this.handleChange();
    }
  }

  handleChange() {
    this.setState({ classes: `${Style.transition} ${Style.foreground} ${Style.transparent}` });
  }

  render() {
    const { classes } = this.state;

    return (
      <div className={classes} />
    );
  }
}

Foreground.propTypes = {
  doneWriting: PropTypes.bool.isRequired,
};

export default Foreground;
