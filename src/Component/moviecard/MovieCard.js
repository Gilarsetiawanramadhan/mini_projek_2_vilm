import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import {getMovielist} from "../../API";
import "./moviecard.css"

const MovieCard = () => {
    const [PopularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getMovielist().then((result) => {
            setPopularMovies(result);
        });
    }, []);

    return (
    <>
        {PopularMovies.map((movie, i) => {
        return (
            <Col xs lg="6" key={i} className="main-movie-container">
                <div className="movie-container" style={{padding:"10px"}}>
                    <div className="info-title">
                        <h4>{movie.title}</h4>
                        <p>
                            Popularity: {movie.popularity} <br />
                            ID: {movie.id} <br />
                            {movie.overview}
                        </p>
                        <button type="button" className="btn btn-light play-btn">
                            <i className="bi bi-play-fill"></i>PLAY
                        </button>
                    </div>
                    <div className="image-container">
                        <img
                        src={
                            `${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`
                            }
                        alt="movie list"
                        />
                    </div>
                </div>
            </Col>
        );
        })}
    </>
    );
};

export default MovieCard;
