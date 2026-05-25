import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile: {
    status,
    company,
    location,
    website,
    social,
    user: {name,avatar}
}}) => {
  return (
    <div className="portfolio-hero">
      <div className="portfolio-hero-bg"></div>
      <div className="portfolio-hero-content">
          <img
            className="portfolio-avatar"
            src={ avatar }
            alt=""
          />
          <h1 className="portfolio-name">{name}</h1>
          <p className="portfolio-status">{status} {company && <span>at <span className="text-primary">{company}</span></span>}</p>
          <p className="portfolio-location">{location && <><i className="fas fa-map-marker-alt"></i> {location}</>}</p>
          <div className='portfolio-social'>
            {website && (
                <a href={website} target='_blank' rel='noopener noreferrer' className="social-link">
                <i className='fas fa-globe fa-lg' />
                </a>
            )}

            {social && social.twitter && (
                <a href={social.twitter} target='_blank' rel='noopener noreferrer' className="social-link">
                <i className='fab fa-twitter fa-lg' />
                </a>
            )}

            {social && social.facebook && (
                <a href={social.facebook} target='_blank' rel='noopener noreferrer' className="social-link">
                <i className='fab fa-facebook fa-lg' />
                </a>
            )}

            {social && social.linkedin && (
                <a href={social.linkedin} target='_blank' rel='noopener noreferrer' className="social-link">
                <i className='fab fa-linkedin fa-lg' />
                </a>
            )}

            {social && social.youtube && (
                <a href={social.youtube} target='_blank' rel='noopener noreferrer' className="social-link">
                <i className='fab fa-youtube fa-lg' />
                </a>
            )}

            {social && social.instagram && (
                <a href={social.instagram} target='_blank' rel='noopener noreferrer' className="social-link">
                <i className='fab fa-instagram fa-lg' />
                </a>
            )}
            </div>
        </div>
    </div>
  )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop