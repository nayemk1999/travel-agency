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
                    <h1>Local Shopping, Dining, & Entertainment</h1>
                    <p>Ogunquit has a number of interesting shops offering antiques, rare books and other items. Ogunquit has a lovely walking village with dozens of boutiques and interesting shops. This coastal area is also famous for restaurants, from casual to fine dining, as well as great comedy clubs. Enjoy a show at the renowned Ogunquit Playhouse or live music at one of the local venues.</p>
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
