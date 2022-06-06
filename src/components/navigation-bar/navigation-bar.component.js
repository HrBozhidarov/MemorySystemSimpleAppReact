import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-site.png';

import './navigation-bar.component.css';

function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
                <img className="w-h-logo" src={logo} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link nav-home" to="/home"><i className="fa fa-home"></i> Home</Link>
                    </li>
                </ul>
                <ul className="navbar-nav" >
                    <li className="nav-item active">
                        <Link className="nav-link" to="/user/create">Register</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/user/loging">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;
