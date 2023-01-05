import React, {useState} from 'react';
import aboutImage from './../images/IMG_5948 copy.jpg';
import AboutModal from './AboutModal.jsx';

const About = () => {
  const [show, setShow] = useState(false)
  return (<div className="about-wrapper">
    <span className="about-text-wrapper">
      {show ? <AboutModal /> : <></>}
      <div className="about-title">Hi-- it's me, Alice!</div>
      <div className="about-description">I'm a full stack software engineer, and it's nice to meet you!</div>
      <div className="about-button" onClick={() => setShow(!show)}>(read the whole story)</div>
    </span>
      <div className="about-image"><img src={aboutImage}></img></div>
    </div>)
}
export default About;