import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className="dev-card">
      <div className="dev-card-header">
        <img src={avatar} alt="" className="dev-avatar" />
        <h2 className="dev-name">{name}</h2>
        <p className="dev-status">
          {status} {company && <span className="dev-company">at {company}</span>}
        </p>
        <p className="dev-location">
          {location && <><i className="fas fa-map-marker-alt"></i> <span>{location}</span></>}
        </p>
      </div>
      <div className="dev-card-body">
        <ul className="dev-skills">
          {skills.slice(0, 4).map((skill, index) => (
              <li key={index} className="skill-pill">
                {skill}
              </li>
          ))}
          {skills.length > 4 && <li className="skill-pill extra">+{skills.length - 4}</li>}
        </ul>
      </div>
      <div className="dev-card-footer">
        <Link to={`/profile/${_id}`} className="btn-dev-profile">
          View Profile <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem