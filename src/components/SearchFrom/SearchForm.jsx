import { useState } from 'react';

import css from './SearchForm.module.css'

export const SearchForm = ({ onFormSubmit, btnText }) => {
  const [searchValue, setSearchValue] = useState('');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(searchValue);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input onChange={inputChange} className={css.form_input} placeholder='Type here'/>
      <button type="submit" className={css.form_btn}> {btnText} </button>
    </form>
  );
}
