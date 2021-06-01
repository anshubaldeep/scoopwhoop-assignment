import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import Logo from '../assets/icons/Logo';


const Footer=()=>{
        return(
            <>
            <div className='footer'>
                <Container>
                    <Row>
                    <Col md={6}>
                        <Row>
                        <Col md={6} className='footer-logo'>
                            <Logo/>
                            <br/>
                            <span>ScoopWhoop Media Pvt Ltd.</span>
                        </Col>
                        <Col md={6} className='follow-us'>
                            <span>Follow us on:</span>
                            <Row>
                            <Col md={4} xs={4}><div className='footer-icons Facebook'><Facebook /></div></Col>
                            <Col md={4} xs={4}><div className='footer-icons Twitter'><Twitter /></div></Col>
                            <Col md={4} xs={4}><div className='footer-icons Instagram'><Instagram /></div></Col>
                            </Row>
                        </Col>
                        </Row>
                        </Col>
                        <Col md={6}>
                            <Row className='footer-links-row'>
                                <Col md={6}>
                                    <div className='footer-links'>About Us</div>
                                    <div className='footer-links'>Contact Us</div>
                                    <div className='footer-links'>Careers</div>
                                </Col>
                                <Col md={6}>
                                <div className='footer-links'>Advertise With Us</div>
                                <div className='footer-links'>Privacy Policy</div>
                                <div className='footer-links'>Terms and Conditions</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
            <div className='copyright'>© Created by Baldeep Singh, 2021</div>
            </>
        );
}

export default Footer;