import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/MovieDetails/Cast/Cast';
import Reviews from 'pages/MovieDetails/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast " element={<Cast />} />
            <Route path="reviews " element={<Reviews />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

// 3fffdfe7cecd1a69958de862b7a37291
// https://api.themoviedb.org/3/movie/550?api_key=3fffdfe7cecd1a69958de862b7a37291

// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
