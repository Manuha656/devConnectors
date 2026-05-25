import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Sidebar = ({ auth: { isAuthenticated, loading } }) => {
  const location = useLocation();

  if (loading || !isAuthenticated) {
    return null; // Sidebar only visible to logged-in users
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <ul>
          <li>
            <Link to="/dashboard" className={isActive('/dashboard')}>
              <i className="fas fa-home"></i> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/profiles" className={isActive('/profiles')}>
              <i className="fas fa-users"></i> <span>Developers</span>
            </Link>
          </li>
          <li>
            <Link to="/posts" className={isActive('/posts')}>
              <i className="fas fa-comment-dots"></i> <span>Community Posts</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-pro-badge">
          <i className="fas fa-rocket"></i> DevConn Pro
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Sidebar);
