import React from 'react';
import Style from './style.css';

const Profile = () => (
  <div className={`${Style.aura} ${Style.profile}`}>
    <img src="/src/static/me.png" className={`${Style.profilePic}`} alt="Victor Piccoli" />
  </div>
);

export default Profile;
