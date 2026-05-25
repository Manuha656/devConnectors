import React,{ useEffect }  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return <>
    { loading? <Spinner/> : <div className="page-wrapper">
        <div className="page-header">
          <h1 className="x-large text-dark">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop text-primary"></i> Browse and connect with top developers
          </p>
        </div>
        <div className="dev-grid">
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <div className="empty-state">No profiles found...</div>
          )}
        </div>
    </div> }
  </>
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles);