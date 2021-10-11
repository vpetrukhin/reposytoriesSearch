import { useState } from "react";

export const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => setInputValue(e.target.value);

  const inputSubmitHandler = (inputValue) => {
    onSearch(inputValue);
    setInputValue("");
  };

  const searchHandler = () => inputSubmitHandler(inputValue);

  const enterHandler = (e) => {
    if (e.code === "Enter" && inputValue.trim() !== "") {
      inputSubmitHandler(inputValue);
    }
  };

  return (
    <div className="header__search search" onKeyDown={enterHandler}>
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
