import React from "react";

function ContactForm(){
    return(
        <div className="contactForm">
            <div className="form" data-aos="flip-up" data-aos-delay="80" data-aos-duration="800">
                <div className="container-fluid">
                    <h1 className="contactHeading">Contact Us<hr /></h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="">NAME <span className="impStar">*</span></label><br />
                            <input type="text" placeholder="NAME" name="" id="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="">EMAIL ADDRESS <span className="impStar">*</span></label><br />
                            <input type="text" placeholder="EMAIL ADDRESS" name="" id="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="">PHONE <span className="impStar">*</span></label><br />
                            <input type="tel" placeholder="PHONE NUMBER" name="" id="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="">YOUR MESSAGE <span className="impStar">*</span></label><br />
                            <textarea name="" id="" placeholder="YOUR MESSAGE" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <button>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;