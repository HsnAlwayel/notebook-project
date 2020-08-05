//React
import React from "react";
import { Link } from "react-router-dom";
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Buttons/DeleteButton";

//Styles
// import { ItemWrapper } from "./styles";

const NoteItem = ({ note }) => {
  return (
    <div>
      <Link to={`/notes/${note.slug}`}>
        <p>{note.title}</p>
      </Link>
      <UpdateButton oldNote={note} />
      <DeleteButton noteId={note.id} />
    </div>
  );
};

export default NoteItem;
