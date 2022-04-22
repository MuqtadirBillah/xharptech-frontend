import React from "react";
import Navigation from "./Navigation";
import WorkCard from "./WorkCard";
import Contact from "./Contact";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function WorkPage(){

    var bannerStyle = {
        backgroundImage: `url("/assets/images/pencil-banner.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <>
            <Navigation />
            <div className="workPage">
                <di className="container-fluid">
                    <div className="banner" style={bannerStyle}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <h1>Our Services</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="workMain">
                        <h5>OUR WORK</h5>
                        <h1 className="sectionMainHeading">Look and feel!</h1>
                        <div className="workShowcase">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </di>
                <Contact />
                <ContactEmail />
                <Footer />
            </div>
        </>
    );
}

export default WorkPage;