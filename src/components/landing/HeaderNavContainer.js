import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';


export const HeaderNavContainer = () => {
    return (
        <nav className="navbar navbar-toggleable-sm custom-black navbar-inverse">
            <div className="container">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link text-white" exact to="/">Covid Leads</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default HeaderNavContainer;

