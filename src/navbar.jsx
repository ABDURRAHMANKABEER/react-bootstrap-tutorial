import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Mynavbar = () => {
    return (
        <>
        <Navbar expand="xl" className="bg-primary navbar-dark position-fixed top-0 start-0 end-0 z-3">
            <Container>
                <Navbar.Brand href="/">My Projects</Navbar.Brand>
                <Navbar.Toggle aria-controls="user-toggle" />
                <Navbar.Collapse id="user-toggle">
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contactMe">Contact Me</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/usersList">Users List</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/weatherApp">
                            Weather App
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/reduxPractice">
                            Redux Practice
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}
 
export default Mynavbar;