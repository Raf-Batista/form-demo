import React from 'react'
import './Signup.css';
import signup from '../../scripts/signup';
import useForm from '../../hooks/useForm';
import { isExpired, decodeToken } from "react-jwt";


const Signup = () => {

    const initialValues = {username: "", email: "", password: ""};
    const {values, setValues, handleChange} = useForm(initialValues);
    const {username, email, password} = values;
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await signup(values);
        const decodedToken = decodeToken(token);
        const isTokenExpired = isExpired(token);
        console.log("token", token);
        console.log("decodedToken", decodedToken);
        console.log("isExpired", isTokenExpired);

        setValues(initialValues);
    }
    

    return (
        <div className="form">
            
                <div className="form-container">
              

                <form className="form-group" onSubmit={handleSubmit}>
                    <div className="form-header">
                      <h1>Sign up</h1>
                    </div>
              
                    <label className="form-label-container-username">
                        <input  type="text" name="username" placeholder="&nbsp;" autoComplete="off"  required onChange={handleChange} value={username} />
                        <span className="form-label-username">Username</span>
                    </label>
                    
                    <label className="form-label-container-email">
                        <input type="email" name="email" placeholder="&nbsp;" autoComplete="off"  required onChange={handleChange} value={email} />
                        <span className="form-label-email">Email</span>
                    </label>
                    
                    <label className="form-label-container-password">
                        <input type="password" name="password" placeholder="&nbsp;" autoComplete="off" required onChange={handleChange} value={password} />
                        <span className="form-label-password">Password</span>
                    </label>
                     
                    <div className="form-group-button">
                        <button type="submit">Sign up</button>
                    </div>

                    <div className="form-footer">
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

                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>

                </form>

                <div className="form-signup">
                    <span>Already have an account? <a href="#">Log in</a></span>
                </div>

                </div>
                
             
        </div>
    )
}

export default Signup;
