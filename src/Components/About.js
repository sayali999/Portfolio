import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
   

    return (
        <section id='about'>
            <Container fluid className='p-lg-5'>
                <Row className="text-center mt-5">
                    <h3 className='text-capitalize fw-bold' data-aos="zoom-in-down">About Me</h3>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12} className='px-4'>
                        <div className='p-5' data-aos="fade-right" >
                            <div className='About-me'>
                                <h4 className='mb-4'>My Introduction</h4>
                            </div>

                            <Row>
                                <div className='introduction'>
                                    <h5 className='fw-bold'> Welcome To My Portfolio !</h5>
                                    <p className='my-3'>Hi, I'm <span className='text-danger'>Sayali Khadse</span>, I have skills in both front-end and back-end developement allowing me to create seamless user interfaces, and I'm full stack web developer with a passion for creating beautiful, responsive, and user-friendly websites.</p>
                                </div>
                            </Row>
                            <Row>
                                <div className='my-1 contact-info'>
                                    <h5 className='my-3'>Contact Info:</h5>
                                    <h6>
                                        <span className='fw-bold'> <i className="bi bi-envelope"></i> Email : </span>
                                        <span className='text-danger'>sayalikhadse.sk@gmail.com</span>
                                    </h6>
                                    <h6 ><span className='fw-bold'><i className="bi bi-telephone "></i> Phone :</span> <span>9405436999</span></h6>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} >
                        <div className='p-5' data-aos="fade-left">
                            <div className='education-content'>
                                <h4 className='mb-5'><i className="bi bi-mortarboard"></i> Education</h4>

                                <Row>
                                    <div className='timeline-box '>
                                        <div className='timeline shadow-dark'>
                                            <div className='timeline-item'>
                                                <div className='circle-dot'></div>
                                                <h5 className='timeline-date fw-bold'>Master in Computer Application</h5>
                                                <h6 className='timeline-title'>G. H. Raisoni Institute Of Information Technology, Nagpur</h6>
                                                <p className='timeline-text text-muted fw-bold '><i className="bi bi-calendar"></i> 2017 - 2020</p>


                                            </div>

                                            <div className='timeline-item'>
                                                <div className='circle-dot'></div>
                                                <h5 className='timeline-date fw-bold'>Bachelor in Computer Application</h5>
                                                <h6 className='timeline-title'>College Of Mangement and computer Science, Yavatmal</h6>
                                                <p className='timeline-text text-muted fw-bold'><i className="bi bi-calendar"></i> 2013 - 2016</p>


                                            </div>

                                        </div>

                                    </div>
                                </Row>

                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>

        </section>
    )
}

export default About
