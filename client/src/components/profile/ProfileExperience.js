import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div className="portfolio-timeline-item">
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-company">{company} {location && <span>• {location}</span>}</p>
      <p className="timeline-date">
        <span>{moment(from).format('MMM YYYY')}</span> -{' '}
        {!to ? 'Present' : <span>{moment(to).format('MMM YYYY')}</span>}
      </p>
      {description && <p className="timeline-description">{description}</p>}
    </div>
  </div>
)

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
}

export default ProfileExperience;