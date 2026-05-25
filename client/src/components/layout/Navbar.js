import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth:{ isAuthenticated,loading },logout }) => {
  const authLinks = (
    <ul className="navbar-nav right-nav">
      <li>
          <a onClick={logout} href="#!" className="btn-logout">
            <i className='fas fa-sign-out-alt'></i>{' '}
            <span className='hide-sm'>Logout</span>
          </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul className="navbar-nav right-nav">
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li><Link to="/register" className="btn btn-primary nav-btn">Sign Up</Link></li>
      <li><Link to="/login" className="nav-login">Login</Link></li>
    </ul>
  )
  
  return (
    <nav className="navbar bg-dark top-header">
      <h1>
        <Link to="/" className="brand-logo"><i className="fas fa-laptop-code text-primary"></i> DevConnector</Link>
      </h1>
      { !loading && (<>{ isAuthenticated? authLinks: guestLinks }</>)}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
})

export default connect(mapStateToProps,{ logout })(Navbar)