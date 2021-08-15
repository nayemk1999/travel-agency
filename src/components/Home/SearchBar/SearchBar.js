import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './SearchBar.css'
export default function SearchBar() {
    return (
        <Container style={{zIndex: '5 !important', marginTop: '-50px'}}>
            <Form>
                <Row className='checkRate w-75 d-flex text-center align-items-center justify-content-center mx-auto'>
                    <Col md>
                        <select
                            className="form-select m-2 "
                            aria-label="Default select example"
                        >
                            <option selected>Check In</option>
                        </select>
                    </Col>
                    <Col md>
                        <select
                            className="form-select m-2"
                            aria-label="Default select example"
                        >
                            <option selected>Check Out</option>
                        </select>
                    </Col>
                    <Col md>
                        <select
                            className="form-select m-2"
                            aria-label="Default select example"
                        >
                            <option selected>Guest</option>
                        </select>
                    </Col>
                    <Col md>
                        <button className="check-btn m-2" type="submit">CHECK RATES</button>
                    </Col>
                </Row>
            </Form>
        </Container>



    )
}
{/* <div class=" container" aria-label="Mini form">
                <form >
                    <div className="d-flex align-items-center justify-content-center checkRate">
                        <select
                            className="form-select me-2 "
                            aria-label="Default select example"
                        >
                            <option selected>Check In</option>
                        </select>
                        <select

                            className="form-select me-2"
                            aria-label="Default select example"
                        >
                            <option selected>Check Out</option>
                        </select>
                        <select
                            className="form-select me-2"
                            aria-label="Default select example"
                        >
                            <option selected>Guest</option>
                        </select>
                        <button className="check-btn " type="submit">CHECK RATES</button>
                    </div>
                </form>
            </div> */}
