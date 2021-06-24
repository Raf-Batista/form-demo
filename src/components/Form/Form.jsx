import React from 'react'
import './Form.css';

const Form = () => {
    return (
        <div className="form">
            
                <div className="form-container">
              

                <div className="form-group">
                    <div className="form-header">
                      <h1>Sign up</h1>
                    </div>
              
                    <label className="form-label-container-username">
                        <input  type="text" name="username" placeholder="&nbsp;" autoComplete="off"  required />
                        <span className="form-label-username">Username</span>
                    </label>
                    
                    <label className="form-label-container-email">
                        <input type="email" name="email" placeholder="&nbsp;" autoComplete="off"  required />
                        <span className="form-label-email">Email</span>
                    </label>
                    
                    <label className="form-label-container-password">
                        <input type="password" name="password" placeholder="&nbsp;" autoComplete="off" required />
                        <span className="form-label-password">Password</span>
                    </label>
                     
                 

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

                </div>

                <div className="form-signup">
                    <span>Don't have an account? <a href="#">Sign up</a></span>
                </div>

                </div>
                
             
        </div>
    )
}

export default Form;
