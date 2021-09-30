import { RepositoryCard } from "./RepositoryCard";

export const RepotoriesList = () => {
  return (
    <div className="repositories container">
      <p className="repositories__loading-text">Загрузка...</p>
      <p className="repositories__error-text">Что-то пошло не так</p>
      <ul className="repositories__list">
        <li className="repositories__item">
          <RepositoryCard />
        </li>
      </ul>
    </div>
  );
};
