import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from '../LogOut';
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const navbar = () => {
    return (
        <>
        <Navbar bg='currentColor' variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                <BsFillCaretRightSquareFill
                style={{ color: "aqua", fontSize: "30px", paddingRight: "5px" }}
                />
                    BIOSKOP CINEMA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">SERIES</Nav.Link>
                            <Nav.Link href="#action3">POPULER</Nav.Link>
                    </Nav>
                    <Form className="input d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        style={{ borderRadius:"20px"}}
                    />
                    <BsSearch />
                    <Nav.Link>
                        <Logout/>
                    </Nav.Link>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default navbar;
