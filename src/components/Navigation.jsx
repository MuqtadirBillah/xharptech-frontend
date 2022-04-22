import React from "react";

function Navigation(){
    return(
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="/assets/images/logo.png" alt='XparkTech Logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/services">OUR SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/work">WORK</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;