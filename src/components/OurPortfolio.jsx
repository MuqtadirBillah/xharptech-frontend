import React from "react";

function OurPortfolio(){
    return(
        <div className="ourPortfolio">
            <div className="container">
                <div className="row">            
                    <h1 className="updatedSectionMainHeading">Our Portfolio</h1>
                    <div className="row ourHeading">
                        <div className="col-lg-8 col-md-8 col-sm-12 align-self-center ourLeft">
                            <h1>Our Recent works</h1>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 align-self-center ourRight">
                            <button>VIEW ALL</button>
                        </div>
                    </div>
                    <div className="tiless">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div>
                                    <img src="/assets/images/port.png" alt="" />
                                    <div className="content">
                                        <h3>APP DESIGN</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div>
                                    <img src="/assets/images/portland.png" alt="" />
                                    <div className="content">
                                        <h3>BRANDING LOGO</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?</p>
                                    </div>
                                    <img src="/assets/images/portland.png" alt="" />
                                    <div className="content">
                                        <h3>BRANDING LOGO</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div>
                                    <img src="/assets/images/port.png" alt="" />
                                    <div className="content">
                                        <h3>BRANDING LOGO</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid laborum odio voluptatibus iste? Neque repudiandae animi nobis perspiciatis ipsam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurPortfolio;