//React
import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Styles
// import { NoteDetailWrapper, ChangeViewButton } from "./styles";

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
      <div>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
        <button onClick={goBack}>Back</button>
      </div>
    </>
  );
};

export default observer(NoteDetail);
