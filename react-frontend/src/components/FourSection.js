import React from 'react';
import LeftImage from '../assets/images/pp.jpg'; // Update the path to your actual image path
import RightImage from '../assets/images/sexy-perfume.png'; // Update the path to your actual image path


const FourSection = () => {
  return (
    <div className="four-section">
      <div className="row">
        <div className="column left-column">
          <img src={LeftImage} alt="Left" className="left-image" />
        </div>
        <div className="column right-column">
          <img src={RightImage} alt="Right" className="right-image" />
        </div>
      </div>
    </div>
  );
};

export default FourSection;


