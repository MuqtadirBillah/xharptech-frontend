import React from "react";

function Team(){
    return(
        <div className="team">
            <h1 className="sectionMainHeading">Founders</h1>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in"  data-aos-delay="80" data-aos-duration="800">
                    <div className="memberCard">
                        <div className="cardHeader">
                            <img src="/assets/images/team-icon.png" alt="" />
                        </div>
                        <div className="cardBody">
                            <h2>Member 1</h2>
                            <h3>10 YEARS/EXP</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in"  data-aos-delay="80" data-aos-duration="800">
                    <div className="memberCard">
                        <div className="cardHeader">
                            <img src="/assets/images/team-icon.png" alt="" />
                        </div>
                        <div className="cardBody">
                            <h2>Member 1</h2>
                            <h3>10 YEARS/EXP</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in"  data-aos-delay="80" data-aos-duration="800">
                    <div className="memberCard">
                        <div className="cardHeader">
                            <img src="/assets/images/team-icon.png" alt="" />
                        </div>
                        <div className="cardBody">
                            <h2>Member 1</h2>
                            <h3>10 YEARS/EXP</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;