import { NavLink, Outlet } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';

import css from './FilmCard.module.css';

export default function FilmCard({
  movieId,
  name = '',
  title = '',
  release_date,
  backdrop_path,
  vote_average,
  genres,
  overview,
}) {
  const film_title = name ? name : title;
  return (
    <>
      <div className={css.film_card}>
        <div className={css.poster}>
          <img
            src={
              backdrop_path
                ? 'https://image.tmdb.org/t/p/w500' + backdrop_path
                : '../no-image.png'
            }
            alt={`${film_title} poster`}
            className={css.poster_img}
          />
        </div>
        <div className={css.film_description}>
          <h2>{`${film_title} (${
            release_date && new Date(release_date).getFullYear()
          })`}</h2>
          <p>
            <span className={css.title}>Rating: </span>
            {vote_average}
          </p>
          <p>
            <span className={css.title}>Genres: </span>
            {genres && genres.map(genre => genre.name.toLowerCase()).join(', ')}
          </p>

          <p className={css.overview}>
            <span className={css.title}>Overview: </span>
            <br />
            {overview}
          </p>
        </div>
      </div>
      <div className={css.link_extra_container}>
        <span>
          <NavLink to={`/movies/${movieId}/cast`} className={css.link_extra}>
            Cast
          </NavLink>
        </span>
        <span>
          <NavLink to={`/movies/${movieId}/reviews`} className={css.link_extra}>
            Reviews
          </NavLink>
        </span>
      </div>
      <Outlet />
    </>
  );
}

FilmCard.propTypes = {
  movieId: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  backdrop_path: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  overview: PropTypes.string,
};
