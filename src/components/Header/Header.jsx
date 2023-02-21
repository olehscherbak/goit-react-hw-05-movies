import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.header}>
      <NavLink to="/" className={css.headerLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.headerLink}>
        Movies
      </NavLink>
    </div>
  );
}
