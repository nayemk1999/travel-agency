import React from 'react'
import { Card } from 'react-bootstrap'
import HeaderBg from '../../../img/HeaderBody.png'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <Card style={{zIndex: '-1'}} >
            <Card.Img className='heroImg' style={{ height: '500px' }} src={HeaderBg} alt="Card image" />
            <Card.ImgOverlay className="d-flex text-center align-items-center justify-content-center">
                <div className='card-content p-4 text-white'>
                    <h4 >Book Now</h4>
                    <h3>Best Rate Guarantee</h3>
                    <span style={{color: 'white'}}>We guarantee ​you’ll find the lowest price here.</span>
                </div>
            </Card.ImgOverlay>
        </Card>
    )
}
