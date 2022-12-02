import './App.css';
import NavbarMovie from './Component/Navbar';
import IntroMovie from './Component/intro';
import { getMovielist } from './api';
import { useEffect, useState } from 'react';
import './style/LandingPage.css'


const App= ()=>{
  const[popularMovies, setPopularMovies] = useState([])
  // const imageUrl = process.env.REACT_APP_BASEIMGURL

  useEffect(() => {
      getMovielist().then((result) =>{
        setPopularMovies(result)
      })
  },[])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return(
        <div key={i}>
            <img className='movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
            <div className='movies-title'>{movie.title}</div>
            <div className='movies-rate'>{movie.vote_average}</div>
                <div className='movie-popular'>{movie.popularity}</div>
        </div>
      )
    })
  }

  return (
      <div className='myBG'>
        <NavbarMovie/>
        <IntroMovie/>
        <div className='movie-container'>
          <div className='movie-wraper'>
            <PopularMovieList/>
          </div>
        </div>
      </div>
  );
}

export default App;
