import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Explore.css'
import transportation from '../../img/Transportation.png'
import transportation2 from '../../img/Transportation2.png'

export default function Transportation() {
    return (
        <Container className='mt-5 transportation'>
            <Row className=''>
                <Col className='p-5'>
                    <h4>Explore Places</h4>
                    <h1>Transportation</h1>
                </Col>
                <Col className='p-4'>
                    <p>**UNAVAILABLE DUE TO COVID-19 RESTRICTIONS​</p>
                    <p>Our partnership with local trolley companies allows us to offer guests a convenient pickup and drop off right in front of our hotel!</p>
                    <p>Ogunquit Trolley Company offers pick up 8AM – 11PM from 6/27 – Labor Day every 20-30 minutes. Tel: 207-646-1411 </p>
                    <p><strong>RATES:</strong> $2.00/adult per ride + $1.50/child under 10 per ride</p>
                    <div className='explore-btn' style={{ display: 'none' }}>
                        <button className='outline-btn'>CALL NOW</button>
                        <button className='book-btn'> Book Now</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Image className='fluid w-100' src={transportation2} />
                </Col>
                <Col lg={8}>
                    <Image className='fluid w-100' src={transportation} />
                </Col>
            </Row>
        </Container>
    )
}
