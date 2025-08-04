import React from 'react';
import Hexagon from './Hexagon';

const TeamCard = ({ name, role, image }) => (
  <div className="team-card">
    <div className="hexagon-wrapper">
      <Hexagon strokeClass="hexagon stroke1" />
      <Hexagon strokeClass="hexagon stroke2" />
      <img
        src={image}
        alt={name}
        className="team-image"
      />
    </div>
    <h3 className="team-name">{name}</h3>
    <p className="team-role">{role}</p>
    <div className="social-icons">
    <div className="icon-wrapper">
        <a href="#" className="social-link">
        <i className="fab fa-twitter" />
      </a>
    </div>
    <div className="icon-wrapper">
          <a href="#" className="social-link">
        <i className="fab fa-linkedin" />
      </a>
    </div>
    <div className="icon-wrapper">
        <a href="#" className="social-link">
        <i className="fab fa-instagram" />
      </a>
    </div>
    </div>
  </div>
);

export default TeamCard;