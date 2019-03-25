import React from 'react';
import Style from './style.css';
import me from '../../static/me.png';

const Profile = () => (
  <div className={`${Style.aura} ${Style.profile}`}>
    <img src={me} className={`${Style.profilePic}`} alt="Victor Piccoli" />
  </div>
);

export default Profile;
