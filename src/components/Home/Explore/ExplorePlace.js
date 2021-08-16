import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Explore.css'
import explorePlace from '../../img/explorePlace.png'
import explorePlace2 from '../../img/explorePlace2.png'
export default function ExplorePlace() {
    return (
        <div className='mt-5 mb-5'>
            <Row >
                <Col className='explorePlace-img'>
                    <Image className='rectangle-img1' src={explorePlace} /> 
                    <Image className='rectangle-img' src={explorePlace2} /> 
                </Col>
                <Col className='p-5 mr-5'>
                    <h4>Explore Places</h4>
                    <h1>Local Shopping, Dining, & Entertainment</h1>
                    <p>Ogunquit has a number of interesting shops offering antiques, rare books and other items. Ogunquit has a lovely walking village with dozens of boutiques and interesting shops. This coastal area is also famous for restaurants, from casual to fine dining, as well as great comedy clubs. Enjoy a show at the renowned Ogunquit Playhouse or live music at one of the local venues.</p>
                    <div className='explore-btn'>
                        <button className='outline-btn'>CALL NOW</button>
                        <button className='book-btn'> Book Now</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
