import { NavLink } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { GiFilmProjector } from 'react-icons/gi';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.header}>
      <NavLink to="/" className={css.header_link}>
        <TiHome />
        <span className={css.link_text}>Home</span>
      </NavLink>
      <NavLink to="/movies" className={css.header_link}>
        <GiFilmProjector />
        <span className={css.link_text}>Movies</span>
      </NavLink>
    </div>
  );
}
