import React, { useState } from 'react'
import './Login.css';
import login from '../../scripts/login';
import useForm from '../../hooks/useForm';
import { isExpired, decodeToken } from "react-jwt";

const Login = () => {
    const initialValues = {username: "", password: ""};
    const {values, setValues, handleChange} = useForm(initialValues);
    const {username, password} = values;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await login(values);
        const decodedToken = decodeToken(token);
        const isTokenExpired = isExpired(token);
        console.log("token", token);
        console.log("decodedToken", decodedToken);
        console.log("isExpired", isTokenExpired);

        setValues(initialValues);
    }

    return (
        <div className="form-login">
            
                <div className="form-container-login" >
              

                <form className="form-group-login"  onSubmit={handleSubmit}>
                    <div className="form-header-login">
                      <h1>Log in</h1>
                    </div>
              
                    <label className="form-label-container-username-login">
                        <input  type="text" name="username" placeholder="&nbsp;" autoComplete="off" required onChange={handleChange} value={username} />
                        <span className="form-label-username-login">Username</span>
                    </label>
                    
                    <label className="form-label-container-password-login">
                        <input type="password" name="password" placeholder="&nbsp;" autoComplete="off" required onChange={handleChange} value={password} />
                        <span className="form-label-password-login">Password</span>
                    </label>
                     
                    <div className="form-group-button-login">
                        <button type="submit">Log in</button>
                    </div>

                    <div className="form-footer-login">
                        <span>By signing up, you agree to our <a href="#">Terms , Data Policy and Cookies Policy .</a></span>
                    </div>

                    <div className="or">
                        <div>
                            <hr/>
                        </div>
                        <div>
                            <span>or</span>
                        </div>
                        <div>
                            <hr/>
                        </div>
                    </div>

                    <div className="forgot-password-login">
                        <a href="#">Forgot password?</a>
                    </div>

                </form>

                <div className="form-signup-login">
                    <span>Don't have an account? <a href="#">Sign up</a></span>
                </div>

                </div>
                
             
        </div>
    )
}

export default Login;
