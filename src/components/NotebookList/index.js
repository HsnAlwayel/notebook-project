import React from "react";
import { observer } from "mobx-react";

//Buttons
import AddButton from "../Buttons/AddButton";

//Stores
import notebookStore from "../../stores/notebookStore";

//Components
import NotebookItem from "../NotebookItem";

//Styles
import { NotesWrapper, AddButtonWrapper, Title, TitleWrapper } from "./styles";

const NotebookList = () => {
  const notebookList = notebookStore.notebooks
    .filter((notebook) => notebook.name)
    .map((notebook) => <NotebookItem notebook={notebook} key={notebook.id} />);
  return (
    <>
      <TitleWrapper>
        <Title>Notebooks</Title>
      </TitleWrapper>
      <NotesWrapper>
        {notebookList}
        <AddButtonWrapper>
          <AddButton />
        </AddButtonWrapper>
      </NotesWrapper>
    </>
  );
};

export default observer(NotebookList);
