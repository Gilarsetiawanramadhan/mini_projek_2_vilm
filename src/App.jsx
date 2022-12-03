import './App.css';
import NavbarMovie from './Component/Navbar';
import IntroMovie from './Component/intro';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getMovielist } from './api';
import { useEffect, useState } from 'react';
import './style/LandingPage.css'
import { Row, Col } from 'react-bootstrap';


const App= ()=>{
  const[popularMovies, setPopularMovies] = useState([])
  // const imageUrl = process.env.REACT_APP_BASEIMGURL

  useEffect(() => {
    // setPopularMovies((getMovielist))
      getMovielist().then((result) =>{
        setPopularMovies(result)
      })
  },[])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return(
        <div key={i}>
            {/*<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview}
        </Card.Text>
        <Card.Text>
          {movie.vote_average}
        </Card.Text>
        <Card.Text>
          {movie.popularity}
        </Card.Text>
        <Button variant="primary">Play</Button>
      </Card.Body>
    </Card>*/}
            <div className='movies-title'>{movie.title} movie id: {movie.id}</div>
            <img className='movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
            <div className="movie-overview">{movie.overview}</div>
            <div className='movies-rate'>{movie.vote_average}</div>
            <div className='movie-popular'>{movie.popularity}</div>
        </div>
      )
    })
  }

  console.log({popularMovies:popularMovies});

  return (
      <div className='myBG'>
        <NavbarMovie/>
        <IntroMovie/>
        <div className='movie-container'>
          <div className='movie-wraper'>
            <PopularMovieList />
          </div>
        </div>
      </div>
  );
}

export default App;
