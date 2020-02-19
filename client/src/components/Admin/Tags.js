import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tags = ({ tags, setTags }) => {
  let inputRef = useRef();

  const removeTag = i => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const inputKeyDown = e => {
    const val = e.target.value;
    if (e.key === "Enter" && val.trim() !== "") {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      e.preventDefault();
      setTags([...tags, val.trim()]);
      inputRef.current.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };
  return (
    <div className="input-tag item">
      <ul className="input-tag__tags">
        {tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            {/* <button type="button" onClick={() => removeTag(i)}>
              +
            </button> */}
            <FontAwesomeIcon
              icon="times-circle"
              onClick={() => removeTag(i)}
              className="deleteTag"
            />
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input
            type="text"
            onKeyDown={inputKeyDown}
            className="inputTag"
            ref={inputRef}
            placeholder={
              tags.length > 0
                ? null
                : "Write tags for this post. Press enter to add."
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default Tags;
