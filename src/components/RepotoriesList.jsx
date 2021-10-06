import { RepositoryCard } from "./RepositoryCard";

export const RepotoriesList = ({ loading, error, repoList }) => {
  console.log(repoList);
  return (
    <div className="repositories container">
      {repoList.length === 0 && (
        <p className="repositories__loading-text">
          Ничего не найдено попробуйте еще раз
        </p>
      )}
      {loading && <p className="repositories__loading-text">Загрузка...</p>}
      {error && <p className="repositories__error-text">{error.message}</p>}
      {!repoList && (
        <p className="repositories__loading-text">
          Выполните поиск репозиториев
        </p>
      )}
      {repoList.length !== 0 && (
        <ul className="repositories__list">
          {repoList.map((item) => (
            <li className="repositories__item" key={item.id}>
              <RepositoryCard card={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
