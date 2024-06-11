import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-scroll'

const NavbarComp = () => {
  return (
    <>
      <Navbar expand='sm' className="p-4 border-bottom border-light" style={{ backgroundColor: "#191f36"}} id='top'>
        <Container>
          <Navbar.Brand href="#" data-aos="zoom-in">Portfolio</Navbar.Brand>
          
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" >
              <Link to="home" spy={true} smooth={true} offset={50} duration={100}><Nav.Link href='#home' data-aos="zoom-in" >Home</Nav.Link></Link>
                <Link to="about" spy={true} smooth={true} offset={50} duration={100}><Nav.Link href='#about' data-aos="zoom-in"  data-aos-delay="100">About</Nav.Link></Link>
                <Link to='skills' spy={true} smooth={true} offset={50} duration={100}><Nav.Link href='#skills'  data-aos="zoom-in"  data-aos-delay="200">Skills</Nav.Link></Link>
                <Link to='contactus' spy={true} smooth={true} offset={50} duration={100}><Nav.Link href='#contact'  data-aos="zoom-in"  data-aos-delay="300">Contact</Nav.Link></Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>


      
    </>
  )
}

export default NavbarComp
