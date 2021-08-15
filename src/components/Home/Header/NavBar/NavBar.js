import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../../img/Logo.png'
import './NavBar.css'
const NavBar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <Navbar
            expand="lg"
            className={
                isSticky || isCollapsed
                    ? "slide in py-2 show shadow navbar navbar-expand-sm bg-light navbar-light fixed-top"
                    : "slide out show navbar-expand-sm navbar-light  py-2"
            }
        >
            <Container>
                <Navbar.Brand >
                    <span className='nav-bar'>
                        <Nav className="ms-auto">
                            <Nav.Link to="/home" className="mr-5 h5 nav-link">
                                <strong>Home</strong>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5 nav-link">
                                <strong>Rooms</strong>
                            </Nav.Link>
                            <Nav.Link href="#rent" className="mr-5 h5 nav-link">
                                <strong>Wedding</strong>
                            </Nav.Link>
                            <Nav.Link to="/" className="mr-5 h5 nav-link">
                                <strong>In The Area</strong>
                            </Nav.Link>
                        </Nav>
                    </span>
                    <Image
                        className='nav-logo'
                        src={Logo}
                    />

                </Navbar.Brand>
                <Navbar.Toggle
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                    style={{ background: "rgb(199 199 199 / 75%)", marginRight: "7px" }}
                />
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <Nav className="ms-auto">
                            <Nav.Link to="/home" className="mr-5 h5 nav-link">
                                <strong>Local Dining</strong>
                            </Nav.Link>
                            <Nav.Link className="mr-5 h5 nav-link">
                                <strong>Gallery</strong>
                            </Nav.Link>
                            <Nav.Link href="#rent" className="mr-5 h5 nav-link">
                                <strong>Rates</strong>
                            </Nav.Link>
                            <Nav.Link to="/" className="mr-5 h5 nav-link">
                                <strong>Contact</strong>
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBar;
