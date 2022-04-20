import React from "react";

function ContactEmail(){
    return(
        <div className="contactEmail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left d-flex align-items-center justify-content-center">
                        <img src="/assets/images/email.png" alt="email-icon" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right d-flex align-items-center">
                        <div>
                            <h1>Get in touch!</h1>
                            <h2>customer@xharptect.co</h2>
                            <hr />
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi iste recusandae impedit quidem deserunt vel fugit, temporibus odit id!</h4>
                            <button>BOOK A MEETING</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactEmail;