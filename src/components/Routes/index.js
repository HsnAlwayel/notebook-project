import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import NotebookList from "../NotebookList";
import NotebookDetail from "../NotebookDetail";
import NoteDetail from "../NoteDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:noteSlug">
        <NoteDetail />
      </Route>
      <Route path="/:notebookSlug">
        <NotebookDetail />
      </Route>
      <Route path="/">
        <NotebookList />
      </Route>
    </Switch>
  );
};

export default Routes;
