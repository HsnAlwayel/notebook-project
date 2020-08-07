import React from "react";
import { useParams, Redirect } from "react-router-dom";
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
  AddButtonWrapper,
} from "./styles";
import AddButton from "../Buttons/AddButton";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();

  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );

  if (!notebook) return <Redirect to="/" />;

  let notes = notebook.notes
    .map((note) => noteStore.getItemById(note.id))
    .filter((note) => note);

  console.log(notes);

  return (
    <NotebookDetailWrapper>
      <NotebookName>
        Notebook: {notebook.name}
        <AddButtonWrapper>
          <AddButton notebook={notebook} />
        </AddButtonWrapper>
      </NotebookName>
      <NoteList notes={notes} />
      <GoBackButtonLink to="/">
        <GoBackButton>Back to notebooks</GoBackButton>
      </GoBackButtonLink>
    </NotebookDetailWrapper>
  );
};

export default observer(NotebookDetail);
