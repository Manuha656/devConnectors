import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <div key={exp._id} className="dashboard-card">
            <div className="card-header">
              <h3 className="text-dark">{exp.company}</h3>
              <button onClick={()=> deleteExperience(exp._id)} className='btn-icon btn-danger-soft' title="Delete Experience">
                <i className="fas fa-trash"></i>
              </button>
            </div>
            <p className='card-subtitle'>{exp.title}</p>
            <p className="card-dates">
                <i className="far fa-calendar-alt"></i>{' '}
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
                {exp.to === null ? (
                'Present'
                ) : (
                <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                )}
            </p>
        </div>
    ));

  return (
    <div className="dashboard-section">
      <h2 className='section-title'>Experience</h2>
      {experiences.length > 0 ? (
        <div className="card-grid">
          {experiences}
        </div>
      ) : (
        <p className="empty-state">No experience credentials added yet.</p>
      )}
    </div>
  )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience} )(Experience)