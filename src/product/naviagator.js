import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function naviagator() {
    return (
        <Fragment>
            <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav className="navbar navbar-expand-sm navbar-dark bg-info text-light">
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item"><NavLink className="nav-link" to={"/"}>About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/products"}>Product</NavLink ></li>
                    </ul>
                    </div>
                </nav>
                </div>                
            </div>
        </Fragment>
    )
}
