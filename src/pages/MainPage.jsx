import { SearchInput } from "../components/SearchInput";

export const MainPage = () => {
  const onSearch = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <h1 className="header__title">Search Repository</h1>
          <SearchInput onSearch={onSearch} />
        </div>
      </header>
      <main className="main">Список репозитриев</main>
    </>
  );
};
