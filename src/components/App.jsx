import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { PostPage } from "../pages/PostPage";

export const App = () => {
  return (
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
  );
};
