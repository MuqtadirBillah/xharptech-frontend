import React from "react";

function AboutBanner(){
    return(
        <div className="becomeBanner aboutBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 align-self-center">
                        <h1>Our Goals</h1>
                        <h3>Helping our Daries by thorough & exceptional Design</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 align-self-center">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>72+</h2>
                                <h4>Successful Projects</h4>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>20+</h2>
                                <h4>Team Members</h4>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>10</h2>
                                <h4>Years of Experience</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;