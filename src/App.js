import './App.css';
import NavbarMovie from './Component/Navbar';
import MovieCard from './Component/moviecard/MovieCard';
import './style/LandingPage.css'


function App () {
  return (
    <>
      <div className='myBG'>
        <NavbarMovie/>
      </div>
      <div>
        <MovieCard/>
      </div>
    </>
  );
}

export default App;
