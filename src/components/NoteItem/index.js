//React
import React from "react";

//Buttons
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Buttons/DeleteButton";

//Styles
import { NoteItemWrapper, NoteTitleLink } from "./styles";

const NoteItem = ({ note, show }) => {
  return (
    <NoteItemWrapper>
      <NoteTitleLink to={`/notes/${note.slug}`}>
        <p>{note.title}</p>
      </NoteTitleLink>
      {show && <h5>notebook: {note.notebook.name}</h5>}
      <h5>tag: {note.Tags[0].name}</h5>
      <UpdateButton oldNote={note} />
      <DeleteButton noteId={note.id} />
    </NoteItemWrapper>
  );
};

export default NoteItem;
