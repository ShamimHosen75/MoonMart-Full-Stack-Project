import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='lg-4'>
           <div className='logo'>
                <img src={logo} alt="logo" />
                <div>
                  <h1>MoonMart</h1>
                </div>
            </div>

            <p className='footer-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil odit similique ab enim voluptatum quod reprehenderit unde quae! Nesciunt.
            </p>
          </Col>
          <Col className='lg-3'>
           
          </Col>
          <Col className='lg-2'>
           
          </Col>
          <Col className='lg-3'>
           
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;