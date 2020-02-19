import React from "react";
import StyleButton from "../blockStyles/StyleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../scss/editor.scss";

const InlineStyleToolbar = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <>
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.style}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </>
  );
};

const INLINE_STYLES = [
  {
    label: <FontAwesomeIcon icon="bold" title="Bold" className="icon" />,
    style: "BOLD"
  },
  {
    label: <FontAwesomeIcon icon="italic" title="Italic" className="icon" />,
    style: "ITALIC"
  },
  {
    label: (
      <FontAwesomeIcon icon="underline" title="Underline" className="icon" />
    ),
    style: "UNDERLINE"
  },
  { label: "Monospace", style: "CODE" }
];

export default InlineStyleToolbar;
