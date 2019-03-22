import React from 'react';
import ReactDOM from 'react-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Profile from './components/Profile/Profile';

const App = () => (
  <>
    <Profile />
    <SplashScreen />
  </>
);

const wrapper = document.getElementById('root');

ReactDOM.render(<App />, wrapper);
