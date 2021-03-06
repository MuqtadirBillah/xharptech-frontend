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
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/our-portfolio">Portfolio</a>
                            </li>
                        </ul>
                        <a href='./contact'><button className="contactButNav">Contact us</button></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;