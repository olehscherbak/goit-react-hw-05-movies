import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

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
  return (
    <>
      {cast.length > 0 ? (
        <ul className={css.cast_list}>
          {cast.map(({ order, name, profile_path, character }) => {
            return (
              <li key={order} className={css.cast_item}>
                <img
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w500' + profile_path
                      : '../../no-person-image.png'
                  }
                  alt={name}
                  className={css.cast_item_img}
                />
                <div className={css.cast_item_description}>
                  <p className={css.cast_item_text}>{name}</p>
                  {character && (
                    <>
                      <p className={css.cast_item_text}>as</p>
                      <p className={css.cast_item_text}>{character}</p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.error_message}>no cast info</p>
      )}
      {isLoading && <Loader />}
      <ToastContainer />
    </>
  );
}
