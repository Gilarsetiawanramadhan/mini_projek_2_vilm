import "./home.css";
import { Row, Container } from "react-bootstrap";
import MovieCard from "../../components/moviecard/MovieCard";
import NavbarMovie from "../../Component/navbar/Navbar"
const Home = () => {
    return (
    <>
        <Container className="home-background">
            <NavbarMovie />
                <div className="header">
                    <div className="text-box">
                        <h1 style={{ fontWeight: 600, marginBottom: "1px" }}>
                            Welcome, <span>{localStorage.getItem("username")}.</span>
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
        </Container>
    </>
    );
};

export default Home;
