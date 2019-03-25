/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import ReactDOM from 'react-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import '!style-loader!css-loader!./style.css';
import '!style-loader!css-loader!../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <div id="gradient-background" />
    <div className="container">
      <Profile />
      <SplashScreen />
      <Contact />
      <Experience />
    </div>
  </>
);

const wrapper = document.getElementById('root');

ReactDOM.render(<App />, wrapper);
