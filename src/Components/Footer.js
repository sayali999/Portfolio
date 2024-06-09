import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <section className='footer' >
      <Container fluid className='p-4 m-0 ' style={{ backgroundColor: "#191f36" }}>
        <Row className=" text-white align-content-center text-center p-0 m-0 ">
            <h6>Designed by Sayali Khadse</h6>
            <p>All rights reserved</p>
        </Row>
        </Container>
        
    </section>
  )
}

export default Footer
