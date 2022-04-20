import React from "react";

function Achievements(){
    return(
        <div className="achievements">
            <h1 className="sectionMainHeading">Our Achievements</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 left align-self-center">
                                <img src="/assets/images/ach1.png" alt="" />
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 right">
                                <h2>Co-founded and launched<br /><b>10+ digital products</b></h2>
                                <h6>8 mobile apps • 1 e-commerce product • 1 SaaS product</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 left align-self-center">
                                <img src="/assets/images/ach2.png" alt="" />
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 right">
                                <h2>Golden kitty for 3-rd place<br /><b>AI product of the year</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 left align-self-center">
                                <img src="/assets/images/ach3.png" alt="" />
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 right">
                                <h2>Golden kitty for 3-rd place<br /><b>AI product of the year</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 left align-self-center">
                                <img src="/assets/images/ach4.png" alt="" />
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 right">
                                <h2><b>Top Rated Agency according</b><br />to Clutch</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements