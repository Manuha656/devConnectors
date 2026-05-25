import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { deleteEducation } from '../../actions/profile'

const Education = ({ education, deleteEducation }) => {
    const educations = education.map(edu => (
        <div key={edu._id} className="dashboard-card">
            <div className="card-header">
              <h3 className="text-dark">{edu.school}</h3>
              <button onClick={() => deleteEducation(edu._id)} className='btn-icon btn-danger-soft' title="Delete Education">
                <i className="fas fa-trash"></i>
              </button>
            </div>
            <p className='card-subtitle'>{edu.degree}</p>
            <p className="card-dates">
                <i className="far fa-calendar-alt"></i>{' '}
                {moment(edu.from).format('YYYY/MM/DD')} -{' '}
                {edu.to === null ? (
                'Present'
                ) : (
                moment(edu.to).format('YYYY/MM/DD')
                )}
            </p>
        </div>
    ));

  return (
    <div className="dashboard-section">
      <h2 className='section-title'>Education</h2>
      {educations.length > 0 ? (
        <div className="card-grid">
          {educations}
        </div>
      ) : (
        <p className="empty-state">No education credentials added yet.</p>
      )}
    </div>
  )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}
 
export default connect(null, {deleteEducation} )(Education)