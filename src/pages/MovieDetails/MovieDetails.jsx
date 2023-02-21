import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [filmData, setFilmData] = useState(null);
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
  return (
    <>
      <h3 className={css.header}>MovieDetails</h3>
      {isLoading && <Loader />}
      {filmData && <p>{filmData.original_title}</p>}
      <ToastContainer />
    </>
  );
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=3fffdfe7cecd1a69958de862b7a37291&language=en-US
