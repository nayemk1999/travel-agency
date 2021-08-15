import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import book from '../../img/book.png'
export default function BookDirect() {
    return (
        <Container style={{ marginTop: '200px' }} >
            <Row >
                <Col className='mt-5' sm={12} md={6} lg={6} className='bookDirect'>
                    <h4>Book Today</h4>
                    <h1>Book Direct</h1>
                    <p>Book directly with us by calling 207-261-0947, or by visiting the Choice website HERE.</p>
                    <Row>
                        <Col lg={5}>
                            <img src={book} />
                        </Col>
                        <Col>
                            <p className=''>Ogunquit River Inn, an Ascend Hotel Collection Member</p>
                        </Col>

                    </Row>
                </Col>
                <Col className='mt-5 bookDirect-content' sm={12} md={6} lg={6}>
                    <h5>Why Book Direct? </h5>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        <li>* It’s easier for us to make changes to your reservation.</li>
                        <li>* No booking fees when you book direct! No waiting for your waiting confirmation letters to go thru a third party systems.</li>
                        <li> * Enjoy talking to a real person here, onsite, about your stay and room preferences.</li>
                        <li>* Guests who book direct are eligible for upgrades and enjoy more flexibility over their reservation.</li>
                        <li>* Your information stays private.* You get to be in charge of your choices.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
