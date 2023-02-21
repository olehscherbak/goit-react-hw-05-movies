import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [trendingList, setTrendingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=3fffdfe7cecd1a69958de862b7a37291'
    )
      .then(response => response.json())
      .then(res => {
        setTrendingList(res.results);
        console.log(res.results);
      })
      .catch(() => toast.console.error('Oops, something went wrong...'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {/* <ToastContainer /> */}
    </>
  );
}
