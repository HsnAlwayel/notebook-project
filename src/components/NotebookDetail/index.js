import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import notebookStore from "../../stores/notebookStore";

//Styles
import {
  NotebookDetailWrapper,
  NotebookName,
  NotebookTitle,
  GoBackButton,
  GoBackButtonLink,
} from "./styles";

const NotebookDetail = () => {
  const { notebookId } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.id === +notebookId
  );

  if (!notebook) return <Redirect to="/" />;

  return (
    <NotebookDetailWrapper>
      <NotebookName>Name: {notebook.name}</NotebookName>
      <NotebookTitle>{notebook.notes[0].title}</NotebookTitle>
      <p>{notebook.notes[0].body}</p>
      <GoBackButtonLink to="/">
        <GoBackButton>Back to notebooks</GoBackButton>
      </GoBackButtonLink>
    </NotebookDetailWrapper>
  );
};

export default observer(NotebookDetail);
