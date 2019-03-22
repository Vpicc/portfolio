import React from 'react';
import ReactDOM from 'react-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';

const App = () => (
  <>
    <Profile />
    <SplashScreen />
    <Contact />
  </>
);

const wrapper = document.getElementById('root');

ReactDOM.render(<App />, wrapper);
