//React
import React from "react";
import { Link } from "react-router-dom";

//Styles
// import { ItemWrapper } from "./styles";

const NoteItem = ({ note }) => {
  return (
    <div>
      <Link to={`/notes/${note.slug}`}>
        <p>{note.title}</p>
      </Link>
    </div>
  );
};

export default NoteItem;
