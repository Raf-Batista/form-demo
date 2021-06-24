import React from 'react'
import './Form.css';

const Form = () => {
    return (
        <div className="form">
                <div className="form-container">
                <div className="form-header">
                  <h1>Sign up</h1>
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />

                    <label htmlFor="email">Username</label>
                    <input type="email" name="email" />

                    <label htmlFor="password">Username</label>
                    <input type="password" name="password" />

                    <div className="form-login-button">
                        <button>Log in</button>
                    </div>

                    <div className="form-footer">
                        <span>By signing up, you agree to our <a>Terms , Data Policy and Cookies Policy .</a></span>
                    </div>
                </div>

                <div className="form-signup">
                    <span>Don't have an account? <a>Sign up</a></span>
                </div>
                </div>
                
          
        </div>
    )
}

export default Form;
