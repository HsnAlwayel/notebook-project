import React from "react";
import { observer } from "mobx-react";

//Styles
import { SingleNoteWrapper, NoteImage, LinkForTheNotes } from "./styles";

const NotebookItem = ({ notebook }) => {
  return (
    <LinkForTheNotes to={`/${notebook.id}`}>
      <SingleNoteWrapper>
        <NoteImage
          src="https://poppin.imgix.net/products/2018/Medium-Spiral-Notebook_Storm-Velvet_PDP_02.jpg"
          alt="notebook"
        />
        <p>{notebook.name}</p>
      </SingleNoteWrapper>
    </LinkForTheNotes>
  );
};

export default observer(NotebookItem);
