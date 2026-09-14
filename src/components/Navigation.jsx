import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Nav variant="pills" >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Menu" id="menu-dropdown">
        <NavDropdown.Item href="/pizza">Pizzas</NavDropdown.Item>
        <NavDropdown.Item href="/desserts">Desserts</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="React Basics" id="react-basics-dropdown">
        <NavDropdown.Item href="/conditional-rendering">M3-Conditional</NavDropdown.Item>
        <NavDropdown.Item href="/testing">BS-forms</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Advance React" id="advanced-react-dropdown">
        <NavDropdown.Item href="/form">   M1-Forms </NavDropdown.Item>
        <NavDropdown.Item href='/form-component'> M1-Form components</NavDropdown.Item>
        <NavDropdown.Item href="/control-form-component">M1-Control Form Components (Feedback Form)</NavDropdown.Item>
        <NavDropdown.Item href="/Context-API">M2-Context API</NavDropdown.Item>
        <NavDropdown.Item href="/state">M2-State</NavDropdown.Item>
        <NavDropdown.Item href="/goals">M2-Goals</NavDropdown.Item>
        <NavDropdown.Item href="/useEffect">M2-useEffect</NavDropdown.Item>
        <NavDropdown.Item href="/fetch">M2-Fetch</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="maths" id="maths-dropdown">
        <NavDropdown.Item href="/counting">Counting</NavDropdown.Item>
        <NavDropdown.Item href="/table">Table</NavDropdown.Item>
        <NavDropdown.Item href="/star-counting">Star Counting</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  );
}

export default Navigation;