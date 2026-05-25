import React, {useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

const Register = ({ setAlert,register,isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name,email,password,password2} = formData
    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value})
    const onSubmit = async e => {
        e.preventDefault();
        if(password!==password2)
            setAlert("Passwords do not match",'danger');
        else    
        {
            register({ name,email,password })
        }
    }

    if(isAuthenticated){
        return <Navigate to='/dashboard' />
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                  <h1 className="x-large text-primary">Create an account</h1>
                  <p className="lead">Join the community of developers</p>
                </div>
                <form className="auth-form" onSubmit={e=>onSubmit(e)}>
                    <div className="auth-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" name="name" value={name} onChange={e=>onChange(e)} required />
                    </div>
                    <div className="auth-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="name@company.com" name="email" value={email} onChange={e=>onChange(e)} required />
                      <small className="form-text text-light">We use Gravatar for profile images.</small>
                    </div>
                    <div className="auth-group">
                      <label>Password</label>
                      <input
                          type="password"
                          placeholder="••••••••"
                          name="password"
                          value={password} 
                          onChange={e=>onChange(e)} 
                          minLength="6"
                      />
                    </div>
                    <div className="auth-group">
                      <label>Confirm Password</label>
                      <input
                          type="password"
                          placeholder="••••••••"
                          name="password2"
                          value={password2} 
                          onChange={e=>onChange(e)} 
                          minLength="6"
                      />
                    </div>
                    <button type="submit" className="btn-auth">Sign Up</button>
                </form>
                <div className="auth-footer">
                    <p>
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
   )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert,register})(Register)
