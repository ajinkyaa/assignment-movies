import { useDispatch } from 'react-redux';
import { setCurrentEpisode } from '../../redux/features/currentEpisodeSlice';

import convertToRoman from '../../utils/convertToRoman';
import './styles.css';

const Movie =({ movie }) => {
    const { episode_id, title, release_date } = movie;
    const dispatch = useDispatch();

    function handleMovieSelection() {
        dispatch(setCurrentEpisode(episode_id));
    }

    return (
        <div>
            <button className='movie-card-container' onClick={handleMovieSelection} data-testid="button">
                <div className="episode-num">
                    EPISODE {episode_id}
                </div>
                <div className="episode-num-title">
                    EPISODE {convertToRoman(episode_id)} - {title}
                </div>
                <div className="episode-release-date">
                    {release_date}
                </div>
            </button>
        </div>

    )
}

export default Movie
