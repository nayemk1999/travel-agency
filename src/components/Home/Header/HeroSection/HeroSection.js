import React from 'react'
import { Card } from 'react-bootstrap'
import HeaderBg from '../../../img/HeaderBody.png'
import './HeroSection.css'
// import "@fontsource/great-vibes"

export default function HeroSection() {
    return (
        <Card>
            <Card.Img src={HeaderBg} alt="Card image" />
            <Card.ImgOverlay className="">
                {/* <Card.Header as={"h4"} className="text-center mt-1 ">Book Today</Card.Header> */}
                <Card.Body>
                    <div className="hero-card text-center text-white">
                        <h4 className="mt-3">Book Now</h4>
                        <h3 className="mt-3">Best Rate Guarantee</h3>
                        <p className="mt-3">We guarantee ​you’ll find the lowest price here.</p>
                    </div>
                </Card.Body>
            </Card.ImgOverlay>

        </Card>
    )
}
