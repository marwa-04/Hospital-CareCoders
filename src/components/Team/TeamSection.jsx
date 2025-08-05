import React from 'react';
import TeamCard from './TeamCard';
import { teamMembers } from './teamData';
import { FiHome } from "react-icons/fi";
import './teamStyles.css';

const TeamSection = () => (
  <section className="team-section">
    <div className="container">
      <h2 className="team-title">Our Team</h2>
      <div className='text-center'>
            <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary "><FiHome color="white" size={20}/> Home</button>
        <button type="button" className="btn btn-primary mx-0 disabled">/</button>
        <button type="button" className="btn btn-primary mx-0 disabled">Our Team</button>
      </div>
      </div>
      <div className="team-grid">
        {teamMembers.map(member => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;