import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import notebookStore from "../../stores/notebookStore";
import noteStore from "../../stores/noteStore";

//Components
import NoteList from "../NoteList";

//Styles
import {
  NotebookDetailWrapper,
  NotebookName,
  GoBackButton,
  GoBackButtonLink,
} from "./styles";
import AddButton from "../Buttons/AddButton";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );


  const notes = notebook.notes.map((note) =>
    noteStore.getItemById(note.id)).filter((note) => note);

  if (!notebook) return <Redirect to="/" />;

  return (
    <NotebookDetailWrapper>
      <NotebookName>Name: {notebook.name}</NotebookName>
      <NoteList notes={notes} />
      <AddButton notebook={notebook} />
      <GoBackButtonLink to="/">
        <GoBackButton>Back to notebooks</GoBackButton>
      </GoBackButtonLink>
    </NotebookDetailWrapper>
  );
};

export default observer(NotebookDetail);
