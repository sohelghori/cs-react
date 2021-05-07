import { Button, Nav, Navbar, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';

function Menu() {
  return (
    <div className="nav-wrapper">   
        <Container>
            <Navbar>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
            </Navbar>
        </Container>    
    </div>    
     );
}
export default Menu;