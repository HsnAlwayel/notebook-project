//React
import React from "react";
import { observer } from "mobx-react";

//Components
import NoteItem from "../NoteItem";

//Styles
// import { ListWrapper } from "./styles";

const NoteList = ({ notes }) => {
  const filteredNote = notes.filter((note) => note.title);

  const noteList = filteredNote.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));

  return (
    <>
      <div>{noteList}</div>
    </>
  );
};

export default observer(NoteList);
