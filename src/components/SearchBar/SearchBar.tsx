import React, { useRef, useState } from "react";
import styles from "./SearchBar.module.scss";

interface Props {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ setSearchInput, setShowResult }: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchInput(value.toLowerCase());
    setShowResult(true);
  };

  return (
    <form action="submit" onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
