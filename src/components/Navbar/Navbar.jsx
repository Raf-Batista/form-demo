import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
            <div className="navbar-header">
                <div className="navbar-header-logo">
                    <div className="navbar-header-logo-container">
                        <img src="cupcake.svg"></img>
                    </div>
                </div>
                
                {/* <div className="navbar-header-searchbar">
                    <div className="navbar-header-searchbar-container">
                      <input type="text" placeholder="search" />
                    </div>
                </div> */}
                
                <div className="navbar-header-accounts">
                    <div className="navbar-header-accounts-container">
                        <img src="account.png"></img>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="navbar-tabs">

            </div>
        </div>
    )
}

export default Navbar
