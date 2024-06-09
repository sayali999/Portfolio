import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import html from '../Assests/html.png';
import css from '../Assests/css.png';
import bootstrap from '../Assests/bootstrap.png';
import javascript from '../Assests/javascript.png';
import react from '../Assests/react.png';
import expressjs from '../Assests/expressjs.png';
import nodejs from '../Assests/nodejs.png';
import mongodb from '../Assests/mongodb.png';

const Skills = () => {
    return (
        <section className='skill bg-body-tertiary' id='skills'>

            
            <Container className='p-5'>
            <Row className="text-center my-4">
                    <h3 className='text-capitalize fw-bold' data-aos="zoom-in-up">My Skills</h3>
                </Row>
                <Row>
                    <Col lg={3} md={6} sm={6}  xs={6}  >
                        <div className='icons-col' data-aos="zoom-in-up">
                            <div className='icons text-center' >
                                <Image src={html} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>HTML</h6>
                            </div>
                            
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}  xs={6}  >
                        <div className='icons-col' data-aos="zoom-in-up" data-aos-delay="100">
                            <div className='icons text-center' >
                                <Image src={css} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>CSS</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={6}  >
                        <div className='icons-col' data-aos="zoom-in-up" data-aos-delay="200">
                            <div className='icons text-center' >
                                <Image src={bootstrap} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>Bootstrap</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={6}  >
                        <div className='icons-col' data-aos="zoom-in-up" data-aos-delay="300">
                            <div className='icons text-center' >
                                <Image src={javascript} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>Javascript</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={6} sm={6} xs={6}  >
                        <div className='icons-col' data-aos="zoom-in-up" data-aos-delay="400">
                            <div className='icons text-center' >
                                <Image src={react} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>React</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={6} >
                        <div className='icons-col' data-aos="zoom-in-up" data-aos-delay="500">
                            <div className='icons text-center' >
                                <Image src={expressjs} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>Express.js</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={6} >
                        <div className='icons-col' data-aos="zoom-in-up" data-aos-delay="600">
                            <div className='icons text-center' >
                                <Image src={nodejs} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>Node.js</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={6}>
                        <div className='icons-col' data-aos="zoom-in-up" data-aos-delay="700">
                            <div className='icons text-center' >
                                <Image src={mongodb} className='img-thumbnail bg-body-tertiary rounded-0' />
                                <h6 className='mt-2'>MongoDb</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                

            </Container>
        </section>
    )
}

export default Skills
