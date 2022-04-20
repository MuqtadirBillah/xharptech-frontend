import React from "react";

function Contact(){
    return(
        <div className="contact">
            <h5>CONTACT US</h5>
            <h1 className="sectionMainHeading">2 ways to work with us</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 coll">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero magni recusandae impedit ipsam, tempora assumenda fugit commodi labore officia quo facilis et eligendi perferendis. Facilis id vero aut autem, ducimus modi quae iste repellendus! Eius placeat ipsum eaque voluptatem.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 coll">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero magni recusandae impedit ipsam, tempora assumenda fugit commodi labore officia quo facilis et eligendi perferendis. Facilis id vero aut autem, ducimus modi quae iste repellendus! Eius placeat ipsum eaque voluptatem.</p>
                    </div>
                </div>
                <div className="row banner">
                    <div className="col-lg-8 col-md-8 col-sm-12 left align-self-center">
                        <h1>7 out of 10 clients<br />return with new Projects!</h1>
                        <hr />
                        <a href="https://flex-global.s3.eu-west-2.amazonaws.com/pdf/flexy_presentation.pdf" target="_blank"><button><i class="fas fa-arrow-down"></i> PRESENTATION.PDF</button></a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 right">
                        <img src="/assets/images/right-star-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;