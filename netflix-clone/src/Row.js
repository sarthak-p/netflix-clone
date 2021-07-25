import React from 'react';
import axios from './axios'; 
import './Row.css'; 

const baseurl = "https://image.tmdb.org/t/p/original/"; 

function Row({title, fetchUrl, isRowLarge}) {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request); 
            setMovies(request.data.results); 
            return request;
        }
        fetchData(); 
    }, [fetchUrl]);

    console.table(movies); 

    return (
        <div className="row">
            <h2>{title}</h2>


            <div className= "row_posters">
                
                {movies.map((movie) => (
                <img 
                key = {movie.id}
                className={`row_poster ${isRowLarge && "row_posterLarge"}`}
                src={`${baseurl}${isRowLarge ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
                />
            ))}
            </div>
        </div>
    );
}

export default Row;


