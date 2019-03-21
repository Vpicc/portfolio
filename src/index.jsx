import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/container/HelloMessage';

const App = () => (
  <HelloMessage />
);

const wrapper = document.getElementById('root');

ReactDOM.render(<App />, wrapper);
