/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typist from 'react-typist';
import Style from '../css/HelloMessage/style.css';

const HelloMessage = () => (
  <h1 className={Style.hello}>
    <Typist cursor={{ show: true, hideWhenDone: true, hideWhenDoneDelay: 2150 }}>
    Hello
      <Typist.Delay ms={500} />
    , I'm Victor.
    </Typist>
  </h1>
);

export default HelloMessage;
