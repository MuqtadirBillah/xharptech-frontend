import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Hot from './Hot';
import Achievements from './Achievemnents';
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
                <Testimonials />
                <Hot />
                <Achievements />
                <Work />
                <Contact />
                <ContactEmail />
                <Footer />
            </div>
        </>
    );
}

export default Home;