import React from "react";

import {Container, Row, Col} from 'reactstrap';
import { Link } from "react-router-dom";
import '../../style/header.css';

const Header = () => {
    return (
        <header className="header">

            { /*------------ Header Top ---------- */}
            <div className="header_top">
                <container>
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
                </container>
            </div>
        </header>
    );
};

export default Header;