import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdShoppingCart } from 'react-icons/md';
import {Link, useNavigate} from 'react-router-dom'

function NavBar() {
const navigate= useNavigate()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login/konesan">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign-Up</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/todo">To do App</Nav.Link>
            <Nav.Link as={Link} to="/newproduct">Create new product</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant='contained' color='warning' onClick={()=>navigate('/whishList')}><MdShoppingCart/></Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;