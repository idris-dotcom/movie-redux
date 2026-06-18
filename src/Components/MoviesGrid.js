import React, { useState }  from "react";
import '../styles.css' ;
import MovieCard from './MovieCard';

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }){

    const [searchTerm,setSearchTerm] = useState("");
    const [genreFilter,setGenreFilter] = useState("All Genres");
    const [ratingFilter,setRatingFilter] = useState("All");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleGenreChange = (e) => {
        setGenreFilter(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRatingFilter(e.target.value);
    };

    const filteredByGenre = (movie,genreFilter) => {
        return genreFilter === "All Genres" || movie.genre.toLowerCase().includes(genreFilter.toLowerCase());
    }

    const filteredbySearchTerm = (movie,searchTerm )  => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const filteredbyRating = (movie,ratingFilter) => {
        switch(ratingFilter){
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating >= 6 && movie.rating < 8;
            case "Bad":
                return movie.rating < 6;
            case "All":
                return true;
                default:
                    return false;
        }
    }

    const filteredMovies = movies.filter(movie => 
        filteredByGenre(movie,genreFilter) && filteredbySearchTerm(movie,searchTerm) && filteredbyRating(movie,ratingFilter)
    );

    return (
        <div>
            <input type="text" className="search-input" placeholder="Search movies..." value={searchTerm} onChange={handleSearchChange}/>
            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genreFilter} onChange={handleGenreChange}>
                        <option value="All Genres">All Genres</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown" value={ratingFilter} onChange={handleRatingChange}>
                        <option value="All">All</option>
                        <option value="Good">Good</option>
                        <option value="Ok">Ok</option>
                        <option value="Bad">Bad</option>
                    </select>
                </div>
            </div>
            <div className="movies-grid">
        {
            filteredMovies.map(movie => (
              <MovieCard movie = {movie}
               key={movie.id} 
              toggleWatchlist = {toggleWatchlist} 
              isWatchListed = {watchlist.includes(movie.id)}></MovieCard>
            ))
        }

           </div>
        </div>
    
    );
}