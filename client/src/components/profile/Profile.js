import React,{ useEffect }  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'
import { Link, useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const { id } = useParams();

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return  (
    <>
        {profile === null || loading ? ( <Spinner /> ) : (
        <div className="portfolio-wrapper max-w-4xl">
            <div className="portfolio-nav">
              <Link to="/profiles" className="btn-back">
                <i className="fas fa-arrow-left"></i> Back To Profiles
              </Link>
              {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                  <Link to="/edit-profile" className="btn-edit-profile">
                    <i className="fas fa-pencil-alt"></i> Edit Profile
                  </Link>
              )}
            </div>

            <div className="portfolio-grid">
                <ProfileTop profile={profile}/>
                <ProfileAbout profile={profile}/>
                
                <div className="portfolio-row">
                  <div className='portfolio-card portfolio-timeline-container'>
                    <h2 className='portfolio-title'><i className="fas fa-briefcase text-primary"></i> Experience</h2>
                    <div className="portfolio-timeline">
                      {profile.experience.length > 0 ? (
                        <>
                          {profile.experience.map(experience => (
                            <ProfileExperience key={experience._id} experience={experience} /> ))}
                        </> ) : ( <p className="empty-state">No experience credentials</p> )}
                    </div>
                  </div>
                  
                  <div className='portfolio-card portfolio-timeline-container'>
                    <h2 className='portfolio-title'><i className="fas fa-graduation-cap text-primary"></i> Education</h2>
                    <div className="portfolio-timeline">
                      {profile.education.length > 0 ? (
                        <>
                          {profile.education.map(education => (
                            <ProfileEducation key={education._id} education={education} /> ))}
                        </> ) : ( <p className="empty-state">No education credentials</p> )}
                    </div>
                  </div>
                </div>

                { profile.githubusername && <ProfileGithub username={profile.githubusername} />}
            </div>
        </div>
        )}
    </>
    );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);