import React from "react";

function Hero(){
    return(
        <div className="hero">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 left align-self-center">
                                        <h1>Create your human-centric digital products with us</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button>BOOK A MEETING</button>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 right">
                                        <img src="/assets/images/hero-slide-1.png" alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h1>Create your human-centric digital products with us</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button>BOOK A MEETING</button>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right">
                                        <img src="/assets/images/hero-slide-1.png" alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            <div className="container-fluid heroCompanies">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img src="/assets/images/1.svg" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img src="/assets/images/2.svg" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img src="/assets/images/3.svg" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img src="/assets/images/4.svg" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img src="/assets/images/5.svg" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <img src="/assets/images/6.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;