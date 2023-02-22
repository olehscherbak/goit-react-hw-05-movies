import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilmCard from 'components/FilmCard/FilmCard';
import Loader from 'components/Loader/Loader';
// import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [filmData, setFilmData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '?api_key=3fffdfe7cecd1a69958de862b7a37291&language=en-US'
    )
      .then(response => response.json())
      .then(res => {
        setFilmData(res);
      })
      .catch(() => toast.error('Oops, something went wrong...'))
      .finally(() => setIsLoading(false));
  }, [movieId]);
  console.log(movieId);
  const {
    name,
    title,
    release_date,
    backdrop_path,
    poster_path,
    vote_average,
    genres,
    overview,
  } = filmData;
  return (
    <>
      {filmData && !isLoading && (
        <FilmCard
          name={name}
          title={title}
          release_date={release_date}
          backdrop_path={backdrop_path}
          poster_path={poster_path}
          vote_average={vote_average}
          genres={genres}
          overview={overview}
        />
      )}

      {isLoading && <Loader />}
      <ToastContainer />
    </>
  );
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=3fffdfe7cecd1a69958de862b7a37291&language=en-US
