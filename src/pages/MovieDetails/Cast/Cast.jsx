import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/credits?api_key=3fffdfe7cecd1a69958de862b7a37291&language=en-US'
    )
      .then(response => response.json())
      .then(res => {
        setCast(res.cast);
      })
      .catch(() => toast.error('Oops, something went wrong...'))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const { name, profile_path, character, order } = cast;
  console.log(cast);
  return (
    <>
      <ul className={css.cast_list}>
        {cast.map(({ order, name, profile_path, character }) => {
          <li key={order} className={css.cast_item}>
            <img
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + profile_path
                  : '../no-image.png'
              }
              alt="{name}"
            />
            <p>{name}</p>
            <p>as</p>
            <p>{character}</p>
          </li>;
        })}
      </ul>
      <ToastContainer />
    </>
  );
}
