import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';

import { sortBy } from '../../redux/features/sortMoviesSlice';
import { setSearchKeyword, setSearchDisplayList } from '../../redux/features/searchMovieSlice';
import { setCurrentEpisode } from '../../redux/features/currentEpisodeSlice';

import searchMovies from '../../utils/searchMovies';
import { sortOptions } from '../../utils/constant';
import './styles.css';


const SearchAndSort = () => {
    const movies = useSelector(state => state.movies.value);
    const dispatch = useDispatch();

    const handleSort = (option) => {
        dispatch(sortBy(option.value))
    }

    function handleSearch(event) {
        const searchTerm = event.target.value;
        dispatch(setSearchKeyword(searchTerm));
        if (searchTerm.length > 0) {
            const movieItems = searchMovies(movies, searchTerm);
            if (movieItems.length > 0) {
                dispatch(setSearchDisplayList(movieItems));
                if (movieItems.length === 1) {
                    dispatch(setCurrentEpisode(movieItems[0].episode_id));
                }
            } else {
                dispatch(setSearchDisplayList([]));
            }
        }
    }

    return (
        <div data-testid="search-sort-container" className='search-sort-container'>
            <Select options={sortOptions}
                className='sort-box'
            onChange={handleSort} />
            <input className='search-movie' type='search' placeholder='Type to search...' onChange={handleSearch}></input>
        </div>
    )
}

export default SearchAndSort;
