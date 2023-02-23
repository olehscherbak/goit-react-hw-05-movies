import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.query.value.toLowerCase().trim());
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.search_form_input}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
      />
      <button type="submit" className={css.search_form_button}>
        <BsSearch size={'0.8em'} />
        <span className={css.search_form_button_label}>Search</span>
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
