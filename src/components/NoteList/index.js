//React
import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import NoteItem from "../NoteItem";

//Styles
import {
  NoteListWrapper,
  Title,
  TitleWrapper,
  NoteLink,
  NoteListWrapperWrapper,
  TagsWrapper,
} from "./styles";

const NoteList = ({ notes, show }) => {
  const [query, setQuery] = useState("");

  const filteredNote = notes.filter((note) =>
    note.title.toUpperCase().includes(query.toUpperCase())
  );

  const noteList = filteredNote.map((note) => (
    <NoteItem show="true" note={note} key={note.id} />
  ));

  const noteList2 = filteredNote.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));

  const toggleTags = (tagName) => {
    setQuery(tagName);
  };

  return show ? (
    <>
      <TitleWrapper>
        <Title>
          <NoteLink to="/">Notebooks</NoteLink>
          <h3 onClick={() => toggleTags("")}>notes</h3>
          <TagsWrapper>
            <h3 onClick={() => toggleTags("Anas")}>anas</h3>
            <h3 onClick={() => toggleTags("HassAn")}>HaSSan</h3>
          </TagsWrapper>
        </Title>
      </TitleWrapper>

      <NoteListWrapperWrapper>
        <NoteListWrapper>{noteList}</NoteListWrapper>
      </NoteListWrapperWrapper>
    </>
  ) : (
    <>
      <NoteListWrapper>{noteList2}</NoteListWrapper>
    </>
  );
};

export default observer(NoteList);
