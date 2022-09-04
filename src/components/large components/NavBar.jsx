import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const NavBar = () => {
    const user = useContext(UserContext);
    return (
        <div style={{ backgroundColor: '#fffbf2' }}>
            <nav className="navbar navbar-expand-lg  ps-5">
                <Link className="navbar-brand ms-4" to="/Market">🌱 GreenMile</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Market"> Market </Link>
                        </li>

                        <li className='nav-item active ms-3' style={{ width: 650 }}>
                            <btn className='btn btn-sm btn-outline-success p-0' >
                                <Link className="nav-link" to="/Sell">
                                    Sell
                                </Link>
                            </btn>
                        </li>
                        {!user &&
                            <React.Fragment>
                                <li className='nav-item active ms-3' >
                                    <btn className='btn btn-sm btn-outline-success p-0' >
                                        <Link className="nav-link" to="/Register">
                                            Register
                                        </Link>
                                    </btn>
                                </li>
                                <li className='nav-item active ms-3' style={{ width: 650 }}>
                                    <btn className='btn btn-sm btn-outline-success p-0' >
                                        <Link className="nav-link" to="/Login">
                                            Login
                                        </Link>
                                    </btn>
                                </li></React.Fragment>}
                        {user &&
                            <React.Fragment>
                                <li className='nav-item active ms-3'>
                                    <Link className="nav-link" to="/User">
                                        {user.username}
                                    </Link>
                                </li></React.Fragment>}
                        {user &&
                            <React.Fragment>
                                <li className='nav-item active ms-3'>
                                    <Link className="nav-link" to="/Messages">
                                        Messages
                                    </Link>
                                </li></React.Fragment>}

                        {user &&
                            <React.Fragment>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/Logout"> Log out</Link>
                                </li>
                            </React.Fragment>}
                    </ul>
                </div>

            </nav>
        </div>
    );
}


export default NavBar;