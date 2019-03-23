import React from 'react';
import Style from './style.css';

const Contact = () => (
  <div>
    <div className={`${Style.name}`}>Victor Piccoli</div>
    <span><a href="mailto:victorpicc@gmail.com">Email</a></span>
    |
    <span><a href="https://github.com/Vpicc" target="_blank" rel="noopener noreferrer">GitHub</a></span>
    |
    <span><a href="https://www.linkedin.com/in/victor-piccoli/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
  </div>
);

export default Contact;
