import React, {useState}from "react";
import "./style.css";
import { searchMovies } from "../../utils/utilities";



const Navigation = () =>{
    const [searchValue, setSearchValue] =  useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleInput = (event) =>{
        setSearchValue(event.target.value);
    };

    const handleSearch = async ()=>{
        const results = await searchMovies(searchValue);
        setSearchResults(results.results);
    };

    return(
        <div className="navigation">
            <nav className="navbar">
                <div className="logo">
                    <h1>M<span>oo</span>vie</h1>
                </div>
                <div className="inputt">
                    <input  value={searchValue} onChange={handleInput} type="text" placeholder="Search"/>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="links">
                   <li><span>Home</span></li>
                   <li>My list</li>
          <button>Sign in</button>
         </div>
            </nav>
            {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                
              />
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
        </div>
    )
}
export default Navigation;
