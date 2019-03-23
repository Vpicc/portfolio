import React from 'react';
import ReactDOM from 'react-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

const App = () => (
  <>
    <Profile />
    <SplashScreen />
    <Contact />
    <Experience />
  </>
);

const wrapper = document.getElementById('root');

ReactDOM.render(<App />, wrapper);
