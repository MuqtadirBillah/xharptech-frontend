import React from "react";
import Navigation from "./Navigation";
import AboutHero from "./AboutHero";
import AboutBanner from "./AboutBanner";
import Team from './Team'
import TestimonialsUpdated from "./TestimonialsUpdated";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function AboutPage(){
    return(
        <>
            <Navigation />
            <div className="aboutPage">
                <AboutHero />
                <AboutBanner />
                <Team />
                <div className="aboutInfo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-12 imageDiv">
                                <img src="/assets/images/aboutInfoImage.png" alt="people-handshake-image" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <div className="text">                                    
                                    <h2 className="updatedSectionMainHeading">About us</h2>
                                    <h1>Lorem, ipsum dolor.</h1>
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet in aperiam, velit ipsum quo. Laboriosam veritatis quo numquam quasi aliquam expedita dolore at sunt. Earum perspiciatis eius eos! Ex voluptatum corrupti inventore cupiditate tempore?</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TestimonialsUpdated />
            </div>
            <ContactEmail />
            <Footer />
        </>
    );
}

export default AboutPage;