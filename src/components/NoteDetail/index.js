//React
import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Styles
import {
  GoBackButton,
  GoBackButtonLink,
  NoteBodyWrapper,
  NoteTitleWrapper,
  NoteDetailWrapper,
} from "./styles";

//Stores
import noteStore from "../../stores/noteStore";

const NoteDetail = () => {
  const { noteSlug } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const note = noteStore.notes.find((note) => note.slug === noteSlug);

  if (!note) return <Redirect to="/" />;

  return (
    <>
      <NoteDetailWrapper>
        <NoteTitleWrapper>{note.title}</NoteTitleWrapper>
        <NoteBodyWrapper>{note.body}</NoteBodyWrapper>
        <GoBackButtonLink>
          <GoBackButton onClick={goBack}>Back to Notebook</GoBackButton>
        </GoBackButtonLink>
      </NoteDetailWrapper>
    </>
  );
};

export default observer(NoteDetail);
