import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div className="portfolio-timeline-item">
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <h3 className="timeline-title">{school}</h3>
      <p className="timeline-company">{degree}, {fieldofstudy}</p>
      <p className="timeline-date">
        <span>{moment(from).format('MMM YYYY')}</span> -{' '}
        {!to ? 'Present' : <span>{moment(to).format('MMM YYYY')}</span>}
      </p>
      {description && <p className="timeline-description">{description}</p>}
    </div>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;