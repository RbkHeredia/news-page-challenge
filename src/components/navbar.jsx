import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

export default function NavBar(){
  return(
      <Navbar  className="bg-body-tertiary mb-3" expand="lg" style={{padding:'2rem 12%'}}>
        <Container fluid>
          <Navbar.Brand href="#"><h1 style={{fontFamily:'Scheherazade New', fontWeight:700}}>W.</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-md'
            aria-labelledby='offcanvasNavbarLabel-expand-md'
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
              
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#" className='hover-link-nav'>Home</Nav.Link>
                <Nav.Link href="#" className='hover-link-nav'>New</Nav.Link>
                <Nav.Link href="#" className='hover-link-nav'>Popular</Nav.Link>
                <Nav.Link href="#" className='hover-link-nav'>Trending</Nav.Link>
                <Nav.Link href="#" className='hover-link-nav'>Categories</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  )
}