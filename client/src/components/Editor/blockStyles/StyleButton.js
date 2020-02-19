import React from "react";

const StyleButton = ({ onToggle, style, active, label }) => {
  let className = "RichEditor-styleButton";
  if (active) {
    className += " RichEditor-activeButton";
  }
  return (
    <span className={className} onMouseDown={() => onToggle(style)}>
      {label}
    </span>
  );
};

export default StyleButton;
