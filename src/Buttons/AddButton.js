//React
import React, { useState } from "react";

//Icon
import { BsPlusCircle } from "react-icons/bs";

//Modal
import NotebookModal from "../components/modals";

const AddButton = ({ createNotebook }) => {
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

      <NotebookModal
        createNotebook={createNotebook}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default AddButton;
