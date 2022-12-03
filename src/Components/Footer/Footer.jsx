import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
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

            <p className='footer-text mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil odit similique ab enim voluptatum quod reprehenderit unde quae! Nesciunt.
            </p>
          </Col>
          <Col className='lg-3'>
           <div className="footer-quick-links">
              <h4 className="quick-links-title">Top Categories</h4>
              <ListGroup className='mt-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watch</Link>
                </ListGroupItem>

              </ListGroup>
           </div>
          </Col>
          <Col className='lg-2'>
          <div className="footer-quick-links">
              <h4 className="quick-links-title">Useful Links</h4>
              <ListGroup className='mt-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
           </div>
          </Col>
          <Col className='lg-3'>
          <div className="footer-quick-links">
              <h4 className="quick-links-title">Contact</h4>
              <ListGroup className='mt-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Habiganj, Sylhet, Bangladesh</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+880 1786 4737 96</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-mail-line"></i></span>
                  <p>example12@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watch</Link>
                </ListGroupItem>

              </ListGroup>
           </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;