import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import List from "./List";
import Details from "./Details";
import fetchMovieList from './fetchMoviesList';

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieList(dispatch);
  }, [dispatch])

  return (
    <div className="movie-container">
      <List/>
      <Details />
    </div>
  )
}

export default Movies;
