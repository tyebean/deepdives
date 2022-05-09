import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';

const BSNavBar = () => {
  return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                Bootstrap
                </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/adrien">Adrien-Twarog</Nav.Link>
                {/* <Nav.Link href="/example">Example</Nav.Link>
                <Nav.Link href="/example">Example</Nav.Link> */}
              </Nav>
            </Container>
          </Navbar>
        </>
  );
}

export default BSNavBar; 