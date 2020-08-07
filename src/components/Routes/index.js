import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import NotebookList from "../NotebookList";
import NotebookDetail from "../NotebookDetail";
import NoteDetail from "../NoteDetail";
import NoteList from "../NoteList";
import noteStore from "../../stores/noteStore";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route path="/notes/:noteSlug">
        <NoteDetail />
      </Route>
      <Route path="/notes">
        <NoteList show="true" notes={noteStore.notes} />
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

export default observer(Routes);
