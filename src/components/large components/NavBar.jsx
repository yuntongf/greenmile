import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ps-5">
                <Link className="navbar-brand ms-4" to="/Shopping">GreenMile</Link>

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

                    </ul>
                </div>

            </nav>
        </div>
    );
}


export default NavBar;