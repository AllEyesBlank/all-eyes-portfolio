import React from 'react';
import aboutImage from './../images/IMG_5948 copy.jpg';

const About = () => {
  return (<div className="about-wrapper">
    <span className="about-text-wrapper">
      <div className="about-title">Hi-- it's me, Alice!</div>
      <div className="about-description">I'm a full stack software engineer, and it's nice to meet you!</div>
    </span>
      <div className="about-image"><img src={aboutImage}></img></div>
    </div>)
}
export default About;