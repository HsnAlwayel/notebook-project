//React
import React from "react";

//Buttons
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Buttons/DeleteButton";

//Styles
import { NoteItemWrapper, NoteTitleLink } from "./styles";

const NoteItem = ({ note }) => {
  return (
    <NoteItemWrapper>
      <NoteTitleLink to={`/notes/${note.slug}`}>
        <p>{note.title}</p>
      </NoteTitleLink>
      <UpdateButton oldNote={note} />
      <DeleteButton noteId={note.id} />
    </NoteItemWrapper>
  );
};

export default NoteItem;
