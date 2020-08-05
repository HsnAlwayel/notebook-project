//React
import React, { useState } from "react";

//Icon
import { BsPlusCircle } from "react-icons/bs";

//Modal
import NotebookModal from "../modals";
import NoteModal from "../modals/NoteModal";

const AddButton = ({ createNotebook, notebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <BsPlusCircle
        onClick={() => setIsOpen(true)}
        size="3em"
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      {notebook ? (
        <NoteModal isOpen={isOpen} closeModal={closeModal} notebook={notebook} />
      ) : (
          <NotebookModal
            createNotebook={createNotebook}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        )
      }

    </>
  );
};

export default AddButton;
