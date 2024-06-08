import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheckCircle, faLeaf, faShippingFast } from '@fortawesome/free-solid-svg-icons';

const MufaFeature = () => {
  const items = [
    { id: 1, icon: faTruck, title: 'COD Available', text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
    { id: 2, icon: faCheckCircle, title: 'Finest Quality', text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
    { id: 3, icon: faLeaf, title: 'No Harsh Chemicals', text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
    { id: 4, icon: faShippingFast, title: 'Free Shipping', text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' }
  ];

  return (
    <div className="mufa-feature-container">
      {items.map(item => (
        <div key={item.id} className="mufa-feature-item">
          <div className="icon">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MufaFeature;
