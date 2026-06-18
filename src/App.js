import logo from './logo.svg';
import './App.css';
import './styles.css' ;
import Header  from './Components/Header';
import Footer from './Components/Footer';
import MoviesGrid from './Components/MoviesGrid';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Watchlist from './Components/Watchlist';
import { useEffect, useState } from 'react';

function App() {



const [movies,setMovies] = useState([]);
const [watchlist,setWatchlist] = useState([]);

// useEffect(() => {
           
//   fetch("movies.json")
//   .then(response => response.json())
//   .then(data => setMovies(data));
// },[]);

useEffect(() => {
  fetch("https://localhost:7072/api/movies")  // 👈 only this line changes
    .then(response => response.json())
    .then(data => setMovies(data));
}, []);

const toggleWatchlist = (movieID) => {
  setWatchlist(prevWatchlist => {
    if(prevWatchlist.includes(movieID)){
      return prevWatchlist.filter(id => id !== movieID);
    }
    return [...prevWatchlist,movieID];
  });
};
  return (
    <div className="App">
      {/* <header className="header">
      <h1>Welcome to MovieDux</h1>
      </header> */}
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
        <Routes>
          <Route path="/" element={<MoviesGrid watchlist = {watchlist} movies={movies}  toggleWatchlist={toggleWatchlist}/>} />
          <Route path="/watchlist" element={<Watchlist watchlist = {watchlist} movies={movies} toggleWatchlist={toggleWatchlist}/>} />
        </Routes>
        </Router>
      </div>
      
      {/* <footer className='footer'>
        <p className='footer'>footer content is here</p>
      </footer> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
