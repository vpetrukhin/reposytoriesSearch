import { RepositoryCard } from "./RepositoryCard";

export const RepotoriesList = ({ loading, error, repoList }) => {
  return (
    <div className="repositories container">
      {loading && <p className="repositories__loading-text">Загрузка...</p>}
      {error && <p className="repositories__error-text">{error.message}</p>}
      {repoList.length === 0 && !loading && (
        <p className="repositories__loading-text">
          Выполните поиск или если вы уже попытались найти, попробуйте снова с
          другим запросом
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
