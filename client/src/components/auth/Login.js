import React, {useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login,isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email,password} = formData
    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value})
    const onSubmit = e => {
        e.preventDefault();
        login(email,password)
    }

    //Redirect if logged in
    if(isAuthenticated){
        return <Navigate to='/dashboard'/>
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                  <h1 className="x-large text-primary">Welcome back</h1>
                  <p className="lead">Sign in to your account to continue</p>
                </div>
                <form className="auth-form" onSubmit={e=>onSubmit(e)}>
                    <div className="auth-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="name@company.com" name="email" value={email} onChange={e=>onChange(e)} required />
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
                    <button type="submit" className="btn-auth">Sign In</button>
                </form>
                <div className="auth-footer">
                    <p>
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
   )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{ login })(Login)