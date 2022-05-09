import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/">
            {/* <img 
            src="/assets/mystery_block.png" 
            width="30" 
            height="30"
            className="d-inline-block align-top" 
            alt="a question block icon from mario">
            </img> */}
                Welcome
                </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/bootstrap">Bootstrap</Nav.Link>
                {/* <Nav.Link href="/example">Example</Nav.Link>
                <Nav.Link href="/example">Example</Nav.Link> */}
              </Nav>
            </Container>
          </Navbar>
        </>
  );
}

export default NavBar; 