import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div className="portfolio-card portfolio-about">
      {bio && (
        <Fragment>
          <h2 className="portfolio-title">
            <i className="fas fa-user-astronaut text-primary"></i> About {name.trim().split(' ')[0]}
          </h2>
          <p className="portfolio-bio">{bio}</p>
          <div className="portfolio-divider" />
        </Fragment>
      )}

      <h2 className="portfolio-title"><i className="fas fa-magic text-primary"></i> Skill Set</h2>
      <div className="portfolio-skills">
        {skills.map((skill, index) => (
          <div key={index} className="portfolio-skill-pill">
            <i className="fa fa-check" /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;