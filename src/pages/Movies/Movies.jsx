import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Movies.module.css';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';

export default function Movies() {
  const [filmList, setFilmList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query !== '') {
      setIsLoading(true);
      const request = `https://api.themoviedb.org/3/search/movie?api_key=3fffdfe7cecd1a69958de862b7a37291&language=en-US&query=${query}&page=1&include_adult=false`;
      fetch(request)
        .then(response => response.json())
        .then(res => {
          setFilmList(res.results);
          res.results.length === 0 &&
            toast.warn('Oops, nothing match your request :( ');
        })
        .catch(() => toast.error('Oops, something went wrong...'))
        .finally(() => setIsLoading(false));
    }
  }, [query]);

  const changeQuery = newQuery => setQuery(newQuery);

  return (
    <>
      <SearchForm onSubmit={changeQuery} />
      {filmList.length > 0 && (
        <ul className={css.film_list}>
          {filmList.map(({ id, title, name }) => {
            return (
              <li key={id} className={css.film_item}>
                <Link to={`/movies/${id}`} className={css.film_link}>
                  <GiFilmStrip size={'0.8em'} className={css.film_icon} />
                  {title || name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <Loader />}
      <ToastContainer />
    </>
  );
}
