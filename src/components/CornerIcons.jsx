import React from 'react';
import leftImage from '../images/monalisa.png';
import rightImage from '../images/vangogh.png'; 
import '../css/CornerIcons.css'; 

function CornerIcons() {
  return (
    <>
      <img src={leftImage} alt="Left Icon" className="left-icon" />
      <img src={rightImage} alt="Right Icon" className="right-icon" />
    </>
  );
}

export default CornerIcons;
