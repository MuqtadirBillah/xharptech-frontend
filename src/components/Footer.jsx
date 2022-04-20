import React from "react";

function Footer(){

    var d = new Date();
    var year = d.getFullYear();

    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                <img src="/assets/images/favicon.png" alt="" />
                            </div>
                            <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
                                <h5>© X-Sharp PVT(LTD) {year}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right d-flex justify-content-end">
                        <ul>
                            <li>
                                <a href="MEDIUM">MEDIUM</a>
                            </li>
                            <li>
                                <a href="MEDIUM">MEDIUM</a>
                            </li>
                            <li>
                                <a href="MEDIUM">MEDIUM</a>
                            </li>
                            <li>
                                <a href="MEDIUM">MEDIUM</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;