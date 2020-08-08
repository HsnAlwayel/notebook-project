import React from "react";

const TagItem = ({ tag, toggleTags, show }) => {
  return show ? (
    <option value={tag.id}>{tag.name}</option>
  ) : (
    <h3 style={{ userSelect: "none" }} onClick={() => toggleTags(tag.name)}>
      {tag.name}
    </h3>
  );
};

export default TagItem;
