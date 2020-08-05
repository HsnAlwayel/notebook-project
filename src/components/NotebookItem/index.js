import React from "react";
import { observer } from "mobx-react";

//Styles
import { SingleNoteWrapper, NoteImage, LinkForTheNotes } from "./styles";

//Buttons
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Buttons/DeleteButton";

const NotebookItem = ({ notebook }) => {
  return (
    <>
      <LinkForTheNotes to={`/${notebook.slug}`}>
        <SingleNoteWrapper>
          <NoteImage
            src="https://poppin.imgix.net/products/2018/Medium-Spiral-Notebook_Storm-Velvet_PDP_02.jpg"
            alt="notebook"
          />
          <p>{notebook.name}</p>
        </SingleNoteWrapper>
      </LinkForTheNotes>
      <div>
        <UpdateButton notebook={notebook} />
        <DeleteButton notebookId={notebook.id} />
      </div>
    </>
  );
};

export default observer(NotebookItem);
