import React from 'react'
import { Card } from 'react-bootstrap'
import HeaderBg from '../../../img/HeaderBody.png'
import './HeroSection.css'
// import "@fontsource/great-vibes"

export default function HeroSection() {
    return (
        <Card >
            <Card.Img style={{ height: '800px' }} src={HeaderBg} alt="Card image" />
            <Card.ImgOverlay className=" d-flex text-center align-items-center justify-content-center">
                <div className='card-content p-5 text-white'>
                    <h4 >Book Now</h4>
                    <h3>Best Rate Guarantee</h3>
                    <p>We guarantee ​you’ll find the lowest price here.</p>
                </div>
            </Card.ImgOverlay>
        </Card>
    )
}
