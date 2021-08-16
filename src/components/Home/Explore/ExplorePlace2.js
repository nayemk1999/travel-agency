import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Explore.css'
import ExplorePlace21 from '../../img/ExplorePlace2-1.png'
import ExplorePlace22 from '../../img/ExplorePlace2-2.png'
export default function ExplorePlace2() {
    return (
        <Container className='mt-5 pb-5'>
            <Row>
                <Col className='p-5'>
                    <h4>Explore Places</h4>
                    <h1>Kayak Rentals</h1>
                    <p><span style={{color: '#29BFB3'}}>World Within Kayak</span> Rentals is located here at the Ogunquit River Inn in the heart of the Rachel Carson Wildlife Refuge. The safe, quiet, beautiful Ogunquit river and it’s maze-like estuaries that lead down to the Atlantic ocean. Guests staying at Ogunquit River Inn receive discounted rates on rentals.</p>
                    <div className='explore-btn'>
                        <button className='outline-btn'>CALL NOW</button>
                        <button className='book-btn'> Book Now</button>
                    </div>
                </Col>
                <Col className='explorePlace-img'>
                    <Image className='rectangle-img1' src={ExplorePlace21} />
                    <Image className='rectangle-img' src={ExplorePlace22} />
                </Col>

            </Row>
        </Container>
    )
}
