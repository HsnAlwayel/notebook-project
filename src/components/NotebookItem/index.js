import React from "react";

//Styles
import { SingleNoteWrapper, NoteImage, LinkForTheNotes } from "./styles";

//Buttons
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Buttons/DeleteButton";

const NotebookItem = ({ notebook }) => {
  return (
    <>
      <SingleNoteWrapper>
        <LinkForTheNotes to={`/${notebook.slug}`}>
          <NoteImage
            src="https://poppin.imgix.net/products/2018/Medium-Spiral-Notebook_Storm-Velvet_PDP_02.jpg"
            alt="notebook"
          />
          <p>{notebook.name}</p>
        </LinkForTheNotes>
        <UpdateButton notebook={notebook} />
        <DeleteButton notebookId={notebook.id} />
      </SingleNoteWrapper>
    </>
  );
};

export default NotebookItem;
