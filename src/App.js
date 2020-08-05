import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import NotebookList from "./components/NotebookList";
import NotebookDetail from "./components/NotebookDetail";

//Styles
import { GlobalStyle } from "./styles";

//Styles

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/:notebookId">
          <NotebookDetail />
        </Route>
        <Route path="/">
          <NotebookList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
