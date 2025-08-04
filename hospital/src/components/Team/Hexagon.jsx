import React from 'react';

const Hexagon = ({ strokeClass }) => (
  <svg
    viewBox="0 0 100 100"
    className="hexagon-svg"
    preserveAspectRatio="none"
  >
    <polygon
      points="50,2 95,25 95,75 50,98 5,75 5,25"
      fill="transparent"
      className={strokeClass}
      strokeWidth="2"
    />
  </svg>
);

export default Hexagon;