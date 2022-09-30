import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import Helmet from '../Components/Helmet/Helmet';
import "../Styles/Home.css";

const Home = () => {

  const year = new Date().getFullYear()

  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex hic dolorem odit, cupiditate porro fugiat sunt iste vero laudantium.</p>

                <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero_img'>
                  <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;