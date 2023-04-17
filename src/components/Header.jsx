import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div>
      <Navbar className='fixed-top ' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/'}>Landscape Painting</Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/favourites'}>Favourites</Link>
            </Nav.Link>            
            <Nav.Link>
              <Link to={'/about'}>About</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Link exact to={'/form'}>
              <Button variant="btn btn-warning" >
                Send Feedback
              </Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header