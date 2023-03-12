import { useSelector } from 'react-redux';
import convertToRoman from "../../../utils/convertToRoman";
import './styles.css';

const Details = () => {
    const moviesList = useSelector(state => state.movies.value)
    const currentEpisode = useSelector(state => state.currentEpisode.value)
    const movie = moviesList.find(movie => movie.episode_id === currentEpisode);

    if(movie) {
        return (
            <div data-testid="movie-description-with-movies" className='description-container selected-movie-wrapper'>
                <div className="movie-wrapper">
                    <h1>Episode {convertToRoman(movie.episode_id)} - {movie.title} </h1>
                    <p>{movie.opening_crawl}</p>
                    <div className="director-field">Directed by: {movie.director}</div>
                </div>
            </div>
        )
    }

    return (
        <div data-testid="movie-description-without-movies" className='description-container no-movie-selected'>
            <h3>No movie selected</h3>
        </div>
    )
};

export default Details;
