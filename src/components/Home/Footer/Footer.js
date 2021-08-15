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
    { name: "(207) 261 0947" },
    { name: "Info@ogunquit.com" },
    { name: "17 Post Rd, Wells, ME 04090" },
]
const services = [
    { name: "Directions" },
    { name: "Giri Hotels" },
    { name: "BookDirect FAQ" },
    { name: "Safety FAQ" },
    { name: "Choice Privileges", },
]
export default function Footer() {
    return (
        <div style={{ background: '#20514D', color: '#FFFFFF' }}>
            <div className='container mt-5 mb-5' >
                <div className='row'>
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle={''} menuItems={services} />
                    <FooterCol key={3} menuTitle={''} menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle={''} menuItems={ourAddress} >
                        <div className="mt-5">
                            <input type='text' placeholder='Enter Your Email' />
                            <button className="book-btn mt-2">SignUp</button>
                        </div>
                    </FooterCol>
                </div>
                <div className=' pt-5' style={{ borderBottom: '1px solid #FFFFFF' }}></div>
                <div className="pt-3 mt-2" style={{}}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p>© {(new Date()).getFullYear()} Ogunquit River Inn | All Rights Reserved</p>
                        <p>Privacy Policy   -   Terms & Conditions</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

