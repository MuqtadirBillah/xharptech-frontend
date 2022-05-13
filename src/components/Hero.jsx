import React from "react";

function Hero(){
    return(
        <div className="hero">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 left align-self-center">
                                        <h1>We Develop the<br /><span className="highText">Visual Identity</span><br />of Your Business</h1>
                                        <button>BOOK A MEETING</button>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 right">
                                        <img src="/assets/images/comp.png" alt="hero-image" />
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
        </div>
    );
}

export default Hero;