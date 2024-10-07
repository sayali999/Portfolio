import React from 'react'


import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import img from '../Assests/Snapchat-606088702.jpg';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
import file from '../Assests/sayalikhadseresume.pdf';
import pic from '../Assests/pic2.jpg';

const Header = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {


        setLoading(false);

      });
    }
  }, [isLoading]);

  const handleClick = () => {

    setLoading(true);


  }
  return (
    <>

      <Container fluid className='p-0 m-0 ' style={{ backgroundColor: "#191f36" }} id='home'>
        <Row className="align-items-center min-vh-100 align-content-center p-0 m-0 ">
          <Col lg={6} className='mb-5'>
            <div className='home-img text-center' data-aos="zoom-in" >
              <Image src={pic} roundedCircle className='my-img rounded object-fit-cover' />
            </div>
          </Col>
          <Col lg={6} className='px-'>
            <div className='text-white px-3' >
              <div className='home-content' data-aos="fade-up">
                <p className='text-ternery mb-1'>Hello, I'm</p>
                <h1 className='text-danger text-uppercase fs-1 fw-bold'>Sayali Khadse</h1>
                <div className='typewriter'>
                  <h4 className='  mb-4'>MERN Stack Web Developer !</h4>
                </div>
                <p className='mb-4 pe-3'>Masters in Computer Application. I'm react developer and I'm very passionate and dedicated to my work.</p>
                <div className='download-resume'>
                  <Button
                    className='rounded-0 py-2 px-4 mb-3'
                    variant="outline-light"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                  >
                    <a href={file} download='sayalikhadseresume' className='resume-btn text-decoration-none' >{isLoading ? 'Downloading…' : 'Download CV'}</a> <i class="fw-bold mx-2 bi bi-download"></i>
                  </Button>
                </div>
                <div className='social-media'>
                  <a href='https://www.linkedin.com/in/sayali-khadse-b97981167/' target="_blank"><i className="bi bi-linkedin"></i></a>
                  <a href='https://github.com/sayali999' target="_blank"><i className="bi bi-github"></i></a>
                </div>

              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Header

