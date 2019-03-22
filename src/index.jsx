import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage/HelloMessage';
import SplashScreen from './components/SplashScreen/SplashScreen';

const App = () => (
  <div>
    <HelloMessage />
    <SplashScreen />
  </div>
);

const wrapper = document.getElementById('root');

ReactDOM.render(<App />, wrapper);
