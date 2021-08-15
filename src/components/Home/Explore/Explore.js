import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import Explore1 from '../../img/Explore1.png'
import Explore2 from '../../img/Explore2.png'
import './Explore.css'

export default function Explore() {
    return (
        <div className='mt-2'>
            <div className='explore-content'>
                <div className='d-flex'>
                    <img style={{ width: '50%', height: '600px' }} src={Explore1} />
                    <img style={{ width: '50%', height: '600px' }} src={Explore2} />
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className="explore text-center text-black d-flex align-items-center justify-content-center">
                        <div style={{color: "#4F615F"}}>
                            <h4>Explore Places</h4>
                            <h3>Beaches & Attractions</h3>
                            <p>Southern Maine is famous for its world class beaches! There are three access points to the broad ribbon of beach that stretches between Wells and Ogunquit; Moody Beach,  Footbridge & Ogunquit Beach. ​</p>
                            <div className='explore-btn'>
                                <button className='outline-btn'>CALL NOW</button>
                                <button className='book-btn'> Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
