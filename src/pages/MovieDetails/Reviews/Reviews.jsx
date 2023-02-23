import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/reviews?api_key=3fffdfe7cecd1a69958de862b7a37291&language=en-US&page=1'
    )
      .then(response => response.json())
      .then(res => {
        setReviews(res.results);
      })
      .catch(() => toast.error('Oops, something went wrong...'))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviews_list}>
          {reviews.map(({ id, author, content, created_at }) => {
            const reviewDate = new Date(created_at).toLocaleString();
            return (
              <li key={id} className={css.reviews_item}>
                <h2 className={css.reviews_item_author}>{author}</h2>
                <p className={css.reviews_item_text}>{content}</p>
                <p className={css.reviews_item_date}>{reviewDate}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.error_message}>no reviews</p>
      )}
      {isLoading && <Loader />}
      <ToastContainer />
    </>
  );
}
