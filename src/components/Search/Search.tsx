import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import SearchIcon from 'assets/icons/Search';

import { IMainSearch } from './Search.types';

import styles from './Search.module.sass';

const Search = ({
  value,
  onChange,
  onSubmit,
  className,
  style,
}: IMainSearch) => {
  return (
    <form
      className={`${styles.search} ${className}`}
      style={style}
      onSubmit={onSubmit}
    >
      <Button type="submit">
        <SearchIcon width={24} height={24} />
      </Button>
      <Input value={value} onChange={onChange} />
    </form>
  );
};

export default Search;
