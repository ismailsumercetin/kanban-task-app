import { ChangeEvent } from 'react';
import useTask from '../contexts/useTask';

const SearchBar = () => {
  const { setSearchVal } = useTask();
  return (
    <input
      className="input__search"
      type="text"
      placeholder="Search Task"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const value = target.value;
        setSearchVal(value);
      }}
    />
  );
};

export default SearchBar;
