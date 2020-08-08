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
import tagStore from "../../stores/tagStore";
import TagItem from "../TagItem";

const NoteList = ({ notes, show }) => {
  const [query, setQuery] = useState("");

  const toggleTags = (tagName) => {
    setQuery(tagName);
  };

  const tagList = tagStore.tags.map((tag) => (
    <TagItem toggleTags={toggleTags} tag={tag} key={tag.id} />
  ));

  const filteredNote = notes.filter((note) =>
    note.Tags[0].name.toUpperCase().includes(query.toUpperCase())
  );

  const noteList = filteredNote.map((note) => (
    <NoteItem show note={note} key={note.id} />
  ));

  const noteList2 = filteredNote.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));

  return show ? (
    <>
      <TitleWrapper>
        <Title>
          <NoteLink to="/">Notebooks</NoteLink>
          <h3 onClick={() => toggleTags("")}>notes</h3>
          <TagsWrapper>{tagList}</TagsWrapper>
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
