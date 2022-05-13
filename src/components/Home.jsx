import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import Companies from './Companies';
import Testimonials from './Testimonials';
import TestimonialsUpdated from './TestimonialsUpdated';
import Hot from './Hot';
import Achievements from './Achievemnents';
import BecomeBanner from './BecomeBanner';
import OurPortfolio from './OurPortfolio';
import Work from './Work';
import Contact from './Contact';
import ContactEmail from './ContactEmail';
import Footer from './Footer';

function Home(){
    return(
        <>
            <Navigation />
            <div className="home">
                <Hero />
                <Services />
                {/* <Companies /> */}
                {/* <Testimonials />
                <Hot /> */}
                <Achievements />
                <TestimonialsUpdated />
                <BecomeBanner />
                <OurPortfolio />
                {/* <Work /> */}
                {/* <Contact /> */}
                <ContactEmail />
                <Footer />
            </div>
        </>
    );
}

export default Home;