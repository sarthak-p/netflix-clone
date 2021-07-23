import React from 'react';
import axios from './axios'; 
import './Row.css'; 

const baseurl = "https://image.tmdb.org/t/p/original/"; 

function Row({title, fetchUrl}) {
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
                className = "row_poster"
                src={`${baseurl}${movie.poster_path}`} 
                alt={movie.name}
                />
            ))}
            </div>
        </div>
    );
}

export default Row