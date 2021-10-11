import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { PostPage } from "../pages/PostPage";

export const App = () => {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization: "Bearer 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",
    },
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/post/:id">
              <PostPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};
