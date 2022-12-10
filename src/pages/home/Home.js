import { Row, Container } from "react-bootstrap";
import MovieCard from "../../Component/moviecard/MovieCard";
import NavbarMovie from "../../Component/navbar/Navbar";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import "./home.css";

const Home = () => {
    return (
    <>
        <div className="home-background">
            <NavbarMovie />
                <div className="header" style={{margin:"0%", padding:"0%"}}>
                    <div className="text-box">
                        <div>
                            <BsFillCaretRightSquareFill style={{ color: "aqua", fontSize: "30px", paddingRight: "5px" }}/>
                            BIOSKOP CINEMA
                        </div>
                        <h1 style={{ fontWeight: 600, marginBottom: "1px" }}>
                            Welcome, 
                            <span>{localStorage.getItem("username")}.</span>
                        </h1>
                        <h3>We have your favorite food here.</h3>
                    </div>
                </div>
                <h2 className="popular-title">Popular Movies</h2>
            <Container>
                <Row>
                <MovieCard />
                </Row>
            </Container>
        </div>
    </>
    );
};

export default Home;
