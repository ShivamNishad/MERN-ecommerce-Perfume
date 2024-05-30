import React from 'react';

const SvgIcon = (props) => {
  const { viewBox, children, ...otherProps } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...otherProps}>
      {children}
    </svg>
  );
};

export default SvgIcon;
