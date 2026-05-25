import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardActions = () => {
  return (
    <div className="dash-actions-row">
        <Link to="/edit-profile" className="btn-action">
          <div className="action-icon"><i className="fas fa-user-edit"></i></div>
          <span>Edit Profile</span>
        </Link>
        <Link to="/add-experience" className="btn-action">
          <div className="action-icon"><i className="fas fa-briefcase"></i></div>
          <span>Add Experience</span>
        </Link>
        <Link to="/add-education" className="btn-action">
          <div className="action-icon"><i className="fas fa-graduation-cap"></i></div>
          <span>Add Education</span>
        </Link>
    </div>
  )
}
