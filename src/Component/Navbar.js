import { Container, Form, Nav, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";



const NavbarMovie = () => {
    return(
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="NavBrand text-white" href="#home" style={{fontSize:"2vw", }}>
                    <BsFillCaretRightSquareFill style={{color:"aqua", fontSize:"3vw", paddingRight:"5px", fontFamily: 'Zen Dots-Cursive'}}/>
                    BIOSKOP CINEMA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white"}} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex me-auto">
                            <Nav.Link href="#home" style={{color:"white", fontFamily: 'FredokaOne-cursive', fontSize:"20px"}}>Home</Nav.Link>
                            <Nav.Link href="#link" style={{color:"white", fontFamily: 'FredokaOne-cursive', fontSize:"20px"}}>Series</Nav.Link>
                            <Nav.Link href="#home" style={{color:"white", fontFamily: 'FredokaOne-cursive', fontSize:"20px"}}>Action</Nav.Link>
                            <Nav.Link href="#home" style={{color:"white", fontFamily: 'FredokaOne-cursive', fontSize:"20px"}}>Populer</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
                <Form.Group className="input">
                            <Form.Control type="text" placeholder =" serach...." style={{borderRadius: "20px"}} />
                        </Form.Group>
                        <BsSearch style={{position: "relative", right:" 160px"}}/>
                        <Button variant="outline-primary" style={{borderRadius: "20px", position: "relative", right: "33px"}}>LOGIN</Button>{' '}
                        <Button variant="outline-primary" style={{borderRadius:"20px"}}>SIGIN</Button>{' '}
            </Container>
        </Navbar>
    )
}

export default NavbarMovie;