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
                <div className="banner" style={bannerStyle}>
                    <h1 data-aos="fade-down" data-aos-delay="80" data-aos-duration="800">Contact</h1>
                </div>
                <div className="contactMain">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <ContactForm />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <ContactInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <ContactEmail />
            <Footer />
        </>
    );
}

export default ContactPage;