import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Home.module.css';

export default function Home() {
  const [trendingList, setTrendingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=3fffdfe7cecd1a69958de862b7a37291'
    )
      .then(response => response.json())
      .then(res => {
        setTrendingList(res.results);
      })
      .catch(() => toast.error('Oops, something went wrong...'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {trendingList.length > 0 && (
        <ul className={css.film_list}>
          {trendingList.map(({ id, title, name }) => {
            return (
              <li key={id} className={css.film_item}>
                {
                  <Link
                    to={`/movies/${id}`}
                    state={{ from: location }}
                    className={css.film_link}
                  >
                    <GiFilmStrip size={'0.8em'} className={css.film_icon} />
                    {title || name}
                  </Link>
                }
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
