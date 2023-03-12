import { useSelector } from 'react-redux';
import Movie from '../../Movie';
import sortMovies from '../../../utils/sortMovies';

import './styles.css';

const List = () => {
    const state = useSelector(state => ({
        movies: state.movies.value,
        searchMovie: state.searchMovie,
        sortByParam: state.sortMoviesBy.value,
    }))

    const movies = state.searchMovie.value.length > 0 ?
        (state.searchMovie.list.length > 0 ? sortMovies(state.searchMovie.list, state.sortByParam) : []) :
        sortMovies(state.movies, state.sortByParam);

    if(movies?.length > 0) {
        return (
            <div data-testid="movie-list-container" className='movie-list-container'>
                {movies.map(movie => <Movie key={movie.episode_id} movie={movie} />)}
            </div>
        )
    }
    return (
        <div data-testid="no-movie-found" className='movie-list-container no-list'>
            <h3>No movies found</h3>
        </div>
    )
};

export default List;
