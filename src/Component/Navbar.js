import { Container, Form, Nav, Navbar, Button } from "react-bootstrap"


const NavbarMovie = () => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>Movie DB</Navbar.Brand>
                <Nav>
                    <Nav.Link>Populer</Nav.Link>
                    <Nav.Link>series</Nav.Link>
                    <Nav.Link>action</Nav.Link>
                    <Form className="searchMovie">
                    <Form.Group className="mb-3" controlId="formBasicsearch">
                        <Form.Control type="search" placeholder="search......" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarMovie;