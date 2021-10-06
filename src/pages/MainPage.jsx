import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { RepotoriesList } from "../components/RepotoriesList";
import { SearchInput } from "../components/SearchInput";

export const MainPage = () => {
  const [repoList, setRepoList] = useState([]);

  const REPO_LIST = gql`
    query getList($title: String!) {
      search(query: $title, type: REPOSITORY, first: 10) {
        nodes {
          ... on Repository {
            name
            owner {
              login
            }
            id
            description
            languages(first: 1) {
              edges {
                node {
                  color
                  name
                }
              }
            }
            stargazerCount
          }
        }
      }
    }
  `;

  useEffect(() => {
    loadRepoList({ variables: { title: 0 } });
  }, []);

  const [loadRepoList, { loading, error, data }] = useLazyQuery(REPO_LIST);

  const getRepositoryList = (data) => {
    if (!data) {
      return [];
    }

    return data.search.nodes.map((node) => ({
      id: node.id,
      name: node.name,
      description: node.description,
      stars: node.stargazerCount,
      owner: node.owner.login,
      lang: node.languages.edges.map((lang) => ({
        langName: lang.node.name,
        langColor: lang.node.color,
      })),
    }));
  };

  const searchHandler = async (inputValue) => {
    loadRepoList({ variables: { title: inputValue } });
    setRepoList(getRepositoryList(data));
    if (data) {
    }
  };

  // console.log(data, loading, error);

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <h1 className="header__title">Search Repository</h1>
          <SearchInput onSearch={searchHandler} />
        </div>
      </header>
      <main className="main">
        <RepotoriesList loading={loading} repoList={repoList} error={error} />
      </main>
    </>
  );
};
