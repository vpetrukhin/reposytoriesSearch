import { useLazyQuery, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { REPO_ITEM } from "../graphql/queries";

export const PostPage = ({ match }) => {
  const { id } = match.params;

  const { loading, data, error } = useQuery(REPO_ITEM, {
    variables: {
      postId: id,
    },
  });

  console.log(data);
  const repoItem = data ? data.node : null;

  if (loading) {
    return (
      <p className="post-page__text_error">Загрузка данных о репозитории</p>
    );
  }

  if (error) {
    return <p className="post-page__text_error">Произошла ошибка</p>;
  }

  if (repoItem) {
    return (
      <section className="post-page">
        <Link className="post-page__link" to="/">
          Обратно на страницу поиска
        </Link>
        <div className="post-page__wrapper">
          <div className="post-page__left">
            <h1 className="post-page__title">
              {repoItem.owner.login}/{repoItem.name}
            </h1>
            <p className="post-page__description">{repoItem.description}</p>
            <p className="post-page__text">
              Колличество пул-реквестов: {repoItem.pullRequests.totalCount}
            </p>
            <p className="post-page__text">
              Колличество ишью: {repoItem.issues.totalCount}
            </p>
          </div>
          <div className="post-page__right">
            <p className="post-page__stars">{repoItem.stargazerCount}</p>
            <ul className="post-page__lang-list">
              {repoItem.languages.nodes.map((lang) => (
                <li className="post-page__lang-item" key={lang.color}>
                  <div
                    className="post-page__lang-color"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="post-page__name">{lang.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
};
