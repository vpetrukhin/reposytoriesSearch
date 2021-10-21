import { gql } from "@apollo/client";

export const REPO_LIST = gql`
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

export const REPO_ITEM = gql`
  query MyQuery($postId: ID!) {
    node(id: $postId) {
      ... on Repository {
        name
        owner {
          login
        }
        description
        languages(first: 10) {
          nodes {
            color
            name
          }
        }
        stargazerCount
        pullRequests {
          totalCount
        }
        issues {
          totalCount
        }
      }
    }
  }
`;
