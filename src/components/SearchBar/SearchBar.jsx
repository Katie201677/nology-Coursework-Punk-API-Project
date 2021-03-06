import React from 'react';
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  
  const { placeholder, updateSearchTerm } = props;
  
  return (
    <form className={styles.form}>
      <input 
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onInput={e => updateSearchTerm(e.target.value)}
      >
      </input>
    </form>
  )
}

export default SearchBar
