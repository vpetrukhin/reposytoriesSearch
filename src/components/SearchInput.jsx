import { useState } from "react";

export const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => setInputValue(e.target.value);

  const searchHandler = () => {
    onSearch(inputValue);
    setInputValue("");
  };

  return (
    <div className="header__search search">
      <input
        value={inputValue}
        id="repositoryName"
        type="text"
        className="search__input"
        placeholder="Введите название репозитория"
        onChange={changeHandler}
      />
      <button type="button" className="search__btn" onClick={searchHandler}>
        Найти
      </button>
    </div>
  );
};
