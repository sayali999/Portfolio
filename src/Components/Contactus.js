import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';

const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_my1suqa', 'template_avbotnl', form.current, {
            publicKey: 'OF-ZVFu5C3bPk24Sw',
        })
            .then(
                () => {
                    form.current.reset();
                    Swal.fire({
                        title: "Thank You !",
                        text: "Your Email has been send !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
                    });

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className='contactus ' id='contactus'>

            <Container>
                <Row className="text-center mt-5">
                    <h3 className='text-capitalize fw-bold' data-aos="zoom-in-up">Contact Me</h3>

                </Row>
                <div className='px-5 py-2 d-flex align-items-center justify-content-center'>
                    <Row>
                        <Col>
                            <div className='contact-form py-4 px-lg-5 px-1'
                             >
                                <form ref={form} onSubmit={sendEmail}>
                                    <div class="form-floating mb-3" data-aos="fade-right">
                                        <input type="name" className="form-control focus-ring focus-ring-light rounded-0" id="name" placeholder="your name" name="user_name" required/>
                                        <label for="name">Your Name</label>
                                    </div>
                                    <div className="form-floating mb-3" data-aos="fade-right" data-aos-delay="100">
                                        <input type="email" className="form-control focus-ring focus-ring-light rounded-0" id="email" placeholder="name@example.com" name="user_email" required/>
                                        <label for="email">Email Address</label>
                                    </div>
                                    <div className="form-floating" data-aos="fade-right" data-aos-delay="150">
                                        <textarea className="form-control focus-ring focus-ring-light rounded-0" required placeholder="Leave a comment here" id="message" style={{ height: "150px" }} name="message"></textarea>
                                        <label for="message">Your Message</label>
                                    </div>
                                   
                                    <button data-aos="fade-right" data-aos-delay="200" type="submit" className="btn  fw-bold px-5 py-2 focus-ring focus-ring-light text-white rounded-0 mt-3" style={{ background: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)'}}>Send</button>

                                </form>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>


            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
        </section>
    )
}

export default Contactus
