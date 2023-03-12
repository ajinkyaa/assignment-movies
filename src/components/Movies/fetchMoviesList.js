import axios from "axios";
import { setMovies } from '../../redux/features/moviesSlice';

const fetchMovieList = async (dispatch) => {
  const { data } = await axios.get('https://swapi.dev/api/films/?format=json');
  console.log(data.results)
  dispatch(setMovies(data.results))
}

export default fetchMovieList;
