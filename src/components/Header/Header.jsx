import React from "react";

import {Container, Row, Col, NavLink} from 'reactstrap';
import { Link } from "react-router-dom";
import '../../style/header.css';


const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },{
        path: '/sars',
        display: 'Cars'
    },
    {
        path: '/blogs',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
];

const Header = () => {
    return (
        <header className="header">

            { /*------------ Header Top ---------- */}
            <div className="header_top">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_left">
                                <span>Need Help?</span>
                                <span className="header_top_help">
                                <i class="ri-phone-fill"></i> +1-438-304-6898
                                </span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                                <Link to='#' className="d-flex align-items-center gap-1">
                                    <i class="ri-login-circle-line"></i> Login
                                </Link>
                                <Link to='#' className=" d-flex align-items-center gap-1">
                                    <i class="ri-user-line"></i> Register
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------ header Middle -------------*/}
            <div className="header_middle">
                <Container>
                    <Row>
                        <Col lg='4' md='3' sm='4'>
                            <div className="logo">
                                <h1> <Link to='/home' className="d-flex align-items-center gap-3">
                                    <i class="ri-car-line"></i>
                                    <span>Rent Car <br/> Service</span>
                                </Link></h1>
                            </div>
                        </Col>

                        <Col lg='3' md='3' sm='4'>
                            <div className="header_location d-flex align-items-center gap-2">
                                <span><i class="ri-earth-line"></i></span>
                                <div className="header_location-content">
                                    <h4>Canada</h4>
                                    <h6>Montreal, QC, Montreal</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg='3' md='3' sm='4'>
                            <div className="header_location d-flex align-items-center gap-2">
                                <span><i class="ri-time-line"></i></span>
                                <div className="header_location-content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg='2' md='3' sm='0' className="text-end">
                            <button className="header_btn btn">
                                <Link to='/contact'>
                                    <i class="ri-phone-line"></i> Request a call
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ----------- main navigation --------------- */}

            <div className="main_navbar">
                <Container>
                    <div className="navigation_wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile_menu">
                            <i class="ri-menu-line"></i>
                        </span>
                        <div className="navigation">
                            <div className="menu">
                                {
                                    navLinks.map((item,index) =>(
                                        <NavLink to={item.path} className="nav_item" key={index}> {item.display}</NavLink>
                                    ))
                                }
                            </div>     
                        </div>
                        <div className="nav_right">
                            <div className="search_box">
                                <input type="text" placeholder="search"/>
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;