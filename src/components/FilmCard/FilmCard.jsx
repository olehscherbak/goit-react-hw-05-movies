import css from './FilmCard.module.css';

export default function FilmCard({
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
        <h2>{film_title}</h2>
        <p>{release_date && new Date(release_date).getFullYear()}</p>
        <p>Rating: {vote_average}</p>
        <p>
          Genres:{' '}
          {genres && genres.map(genre => genre.name.toLowerCase()).join(', ')}
        </p>
        <p>{overview}</p>
      </div>
    </div>
  );
}
