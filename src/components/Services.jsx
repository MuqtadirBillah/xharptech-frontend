import React from "react";

function Services(){
    return(
        <div className="services">
            <h5>OUR SERVICES</h5>
            <h1 className="sectionMainHeading">We take digital experience<br />to the next level</h1>
            <div className="servicesCards">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/web.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>WEB</h4>
                                    <h5>UI/UX design & prototyping</h5>
                                    <h3 className="pulse-infinite"><i class="fas fa-arrow-right"></i></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/app.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>MOBILE</h4>
                                    <h5>UI/UX design & wireframe</h5>
                                    <h3 className="pulse-infinite"><i class="fas fa-arrow-right"></i></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/dev.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>DEVELOPMENT</h4>
                                    <h5>web & mobile</h5>
                                    <h3 className="pulse-infinite"><i class="fas fa-arrow-right"></i></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/brand.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>BRANDING</h4>
                                    <h5>brand identity & logo</h5>
                                    <h3 className="pulse-infinite"><i class="fas fa-arrow-right"></i></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;