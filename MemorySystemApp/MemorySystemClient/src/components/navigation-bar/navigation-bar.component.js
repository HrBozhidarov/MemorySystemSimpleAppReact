import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../shared/auth-context';
import logo from '../../assets/images/logo-site.png';

function NavigationBar() {
    const userAthContext = useAuth();

    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
                <img className="w-h-logo" src={logo} />
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link nav-home" to="/home"><i className="fa fa-home"></i> Home</Link>
                    </li>
                    {userAthContext.user.isAuth() &&
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/memory/create"><i className="fa fa-picture-o"></i> Create You Memory</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/my/memories"><i className="fa fa-camera"></i> My Memories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all/memories"><i className="fa fa-meh-o"></i> All Memories</Link>
                            </li>
                        </>}
                </ul>
                {!userAthContext.user.isAuth() &&
                    <ul className="navbar-nav" >
                        <li className="nav-item active">
                            <Link className="nav-link" to="/user/create">Register</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/user/login">Login</Link>
                        </li>
                    </ul>}

                {userAthContext.user.isAuth() &&
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link"
                                to="#"
                                id="navbarDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <img src={userAthContext.user.profileUrl} width="50" height="50" className="rounded-circle" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item" to="/user/update">Edit Profile</Link>
                                <Link className="dropdown-item" to='#' onClick={userAthContext.onLogout}>Logout</Link>
                            </div>
                        </li>
                    </ul>}
            </div>
        </nav>
    )
}

export default NavigationBar;
