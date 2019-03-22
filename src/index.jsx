import React from 'react';
import ReactDOM from 'react-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';

const App = () => (
  <>
    <SplashScreen />
  </>
);

const wrapper = document.getElementById('root');

ReactDOM.render(<App />, wrapper);
