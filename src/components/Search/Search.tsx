import { useState } from 'react';
import s from './Search.module.scss';

type SearchProps = {
  submit: (e: string) => void;
};
const Search = ({ submit }: SearchProps) => {
  const [value, setValue] = useState('');

  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      submit(value);
    }
  };
  return (
    <div className={s.search}>
      <div className={s.container}>
        <input
          className={s.input}
          placeholder="Search by name…"
          data-testid="inputSearch"
          onChange={(e) => setValue(e.currentTarget.value)}
          onKeyUp={(evt) => handleKeyPress(evt)}
        />
        <button
          className={s.button}
          data-testid="buttonSearch"
          onClick={() => submit(value)}>
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
