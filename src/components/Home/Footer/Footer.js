import React from 'react';
import FooterCol from './FooterCol';
import './Footer.css'
import { Image } from 'react-bootstrap';
import Logo from '../../img/Logo.png'

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
                    <div className='mt-5 col-md-2'>
                        <Image
                            className='nav-logo footer-logo'
                            src={Logo}
                        />
                    </div>
                    <div className=' col-md-10'>
                        <div className='row footer'>
                            <FooterCol key={2} menuTitle={''} menuItems={services} />
                            <FooterCol key={3} menuTitle={''} menuItems={oralHealth} />
                            <FooterCol key={4} menuTitle={''} menuItems={ourAddress} >
                                <div className="mt-5 input-div">
                                    <input class="input" type="text" placeholder='Enter Your Email' />
                                    <button className="book-btn mt-2">SignUp</button>
                                </div>
                            </FooterCol>
                        </div>
                        {/* <FooterCol key={1} menuTitle={''} menuItems={noNamed} className='first-col'/> */}

                    </div>



                </div>
                <div className='pt-5' style={{ borderBottom: '1px solid #FFFFFF' }}></div>
                <div className="pt-3 mt-2">
                    <div className='d-flex justify-content-between footer-end p-2' style={{color: 'white'}}>
                        <span>© {(new Date()).getFullYear()} Ogunquit River Inn | All Rights Reserved</span>
                        <span>Privacy Policy   -   Terms & Conditions</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

