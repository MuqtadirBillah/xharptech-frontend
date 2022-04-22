import React from "react";

function ContactInfo(){
    return(
        <div className="contactInfo">
            <h1>Contact Information</h1>
            <p>Have questions? Contact us and have your questions answered</p>
            <h3 className="country"><i class="fas fa-map-marked-alt countryIcon"></i> Pakistan</h3>
            <h4 className="location"><i class="fas fa-location-arrow locationIcon"></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, aspernatur.</h4>
            <h4 className="phone"><i class="fas fa-phone-alt phoneIcon"></i> 000000000 000</h4>
        </div>
    );
}

export default ContactInfo;