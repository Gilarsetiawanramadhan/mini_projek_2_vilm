import { Container } from "react-bootstrap";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
const IntroMovie =()=>{


    return(
        <>
            <Container>
                <div className="logo-Movie">
                <BsFillCaretRightSquareFill
                style={{ color: "aqua", fontSize: "30px", paddingRight: "5px" }}
                />
                BIOSKOP CINEMA
                </div>
            </Container>
        </>
    )
}

export default IntroMovie;