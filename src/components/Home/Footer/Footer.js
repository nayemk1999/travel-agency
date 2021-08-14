// import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from './FooterCol';


const noNamed = [
    
]
const ourAddress = [
    { name: "Sign up to receive exclusive offers" },
]
const oralHealth = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" }
]
const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" }
]
export default function Footer() {
    return (
        <div className='container mt-5 mb-5' style={{background: '#70F3EF'}}>
            <div className='row'>
                <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                <FooterCol key={2} menuTitle={'.'} menuItems={services} />
                <FooterCol key={3} menuTitle={'.'} menuItems={oralHealth} />
                <FooterCol key={4} menuTitle={'.'} menuItems={ourAddress} >
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <input type='text' placeholder='Enter Your Email'/>
                        <button className="btn btn-primary">+2025550295</button>
                    </div>
                </FooterCol>
            </div>
            <div className=" text-center pt-3">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    );
};

