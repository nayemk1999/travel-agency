import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'
import Shape from '../../img/Shape.png'
import Shape2 from '../../img/Shape2.png'
import Shape3 from '../../img/Shape.png'
import Shape4 from '../../img/Shape4.png'
import Shape5 from '../../img/Shape5.png'


const AboutUs = () => {
    return (
        <div className='mt-5 container'>
            <h1 className='mb-3 mt-5 py-2 text-center bg-b'>About Us</h1>
            <div className="property-container">
                <div className="card-area card-1">
                    <img src={Shape} />
                </div>
                <div className="card-area card-2">
                    <img src={Shape2} />
                </div>
                <div className="card-area card-3">
                    <h4>About Us</h4>
                    <h2>Ogunquit River Inn</h2>
                </div>
                <div className="card-area card-4">
                    <img src={Shape3} />
                </div>
                <div className="card-area card-5">
                    <img src={Shape4} />
                </div>
                <div className="card-area card-6">
                    <h5>Located one mile north of Ogunquit Village, famous for local shopping & dining!</h5>
                    <p>Ogunquit River Inn overlooks the Ogunquit River and the Atlantic Ocean. The Rachel Carson Wildlife Refuge borders the property and attracts ducks, seabirds, deer and other wildlife, adding an extra dimension to your stay. Come relax at our beautiful inn and enjoy our complimentary breakfast!</p>
                </div>
                <div className={`card-area card-7`}>
                    <img src={Shape5} />
                </div>
            </div>
        </div>



    );
};

export default AboutUs;


{/* <Col sm={12} md={12} lg={12} >
                    <div className={styles.houses}>
                        <div className={styles.houseArea1} >
                            <img src={Shape} alt="" className={styles.houseImg} />
                        </div>
                        <div className={styles.houseArea2} >
                            <img src={Shape2} alt="" className={styles.houseImg} />
                        </div>
                        <div className={styles.houseArea3}>
                            <h4>About Us</h4>
                            <h2>Ogunquit River Inn</h2>
                            <img src={Shape3} className={styles.houseImg} alt="" />
                        </div>
                        <div className={styles.houseArea4}>
                            <h5>Located one mile north of Ogunquit Village, famous for local shopping & dining!</h5>
                            <p>Ogunquit River Inn overlooks the Ogunquit River and the Atlantic Ocean. The Rachel Carson Wildlife Refuge borders the property and attracts ducks, seabirds, deer and other wildlife, adding an extra dimension to your stay. Come relax at our beautiful inn and enjoy our complimentary breakfast!</p>
                            <img src={Shape4} alt="" className={styles.houseImg} />
                        </div>
                        <div className={styles.houseArea5}>
                            <img src={Shape5} alt="" className={styles.houseImg} />
                        </div>
                        <div className={styles.houseArea6}>
                            <img src="https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className={styles.houseImg} />
                        </div>
                    </div>
                </Col> */}
