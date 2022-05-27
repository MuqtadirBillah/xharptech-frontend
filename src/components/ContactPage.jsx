import React from "react";
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Contact from "./Contact";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function ContactPage(){
    
    var bannerStyle = {
        backgroundImage: `url("/assets/images/banner-back.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <>
            <Navigation />
            <div className="contactPage">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                            <div className="container">
                                <div className="contactForm">
                                    <h1>Contact us</h1>
                                    <h3>We are here to help you! How can we help you?</h3>
                                    <div className="innerForm">
                                        <input type="email" placeholder="Email Address" name="" id="" />
                                        <textarea name="" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                                        <button className="sendBut">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right">
                            <div className="container">
                                <div className="up">
                                    <img src="/assets/images/contactImg.png" alt="illustration" />
                                </div>
                                <div className="down">
                                    <div className="row">
                                        <div className="col-1">
                                            <h3><i class="fas fa-map-marker-alt"></i></h3>
                                        </div>
                                        <div className="col-11">
                                            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <h3><i class="fas fa-envelope"></i></h3>
                                        </div>
                                        <div className="col-11">
                                            <h3>xharptech@gmail.com</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <h3><i class="fas fa-phone-alt"></i></h3>
                                        </div>
                                        <div className="col-11">
                                            <h3>+923312548498</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;