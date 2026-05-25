import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div className="portfolio-timeline-item">
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-company">{company} {location && <span>• {location}</span>}</p>
      <p className="timeline-date">
        <Moment format="MMM YYYY">{from}</Moment> -{' '}
        {!to ? 'Present' : <Moment format="MMM YYYY">{to}</Moment>}
      </p>
      {description && <p className="timeline-description">{description}</p>}
    </div>
  </div>
)

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
}

export default ProfileExperience;