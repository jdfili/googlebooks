import React from 'react';
import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active mr-2">
                        <Link to="/">Search</Link>
                    </li> 
                    <li className="nav-item">
                        <Link to="/saved">Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Nav