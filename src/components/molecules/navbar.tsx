import { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <NavbarBS className='navbar navbar-expand-sm bg-primary shadow-sm mb-3 fixed-top'>
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink} className="navbar-brand d-flex flex-row">
                        <div><h4>Edtech</h4></div>
                        <div><h4 className='text-danger'>.</h4></div>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="/buy-a-course" as={NavLink}>Buy a course</Nav.Link>
                    <Nav.Link to="/success" as={NavLink}>Success</Nav.Link>
                    <Nav.Link to="/categories" as={NavLink}>Categories</Nav.Link>
                    <Nav.Link to="/pricing" as={NavLink}>Pricing</Nav.Link>
                </Nav>
                <Button className='btn btn-outline-warning' href='' type='button'>
                    Get started
                </Button>
            </Container>
        </NavbarBS>
    )
}