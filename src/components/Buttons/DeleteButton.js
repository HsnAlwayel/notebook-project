//React
import React from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

//Styles
import { DeleteButtonStyled } from "./styles";

//Icon
import { BsTrash } from "react-icons/bs";

//Stores
import noteStore from "../../stores/noteStore";
import notebookStore from "../../stores/notebookStore";

const DeleteButton = ({ noteId, redirect, notebookId }) => {
  const history = useHistory();

  const handleDelete = () => {
    if (notebookId) {
      notebookStore.deleteNotebook(notebookId);
      history.push("/notebooks");
    } else {
      noteStore.deleteNote(noteId);
    }

    if (redirect) history.push("/notes");
  };

  return (
    <DeleteButtonStyled onClick={handleDelete}>
      Delete <BsTrash />
    </DeleteButtonStyled>
  );
};

export default observer(DeleteButton);
