//change to fontawesome icon
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Custom overrides for "code" style.
export const styleMap = {
  CODE: {
    backgroundColor: "rgba(64, 64, 64, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};
//for blockquote
export function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    case "code-block":
      return "RichEditor-code-block";
    case "header-one":
      return "RichEditor-h1";
    case "header-two":
      return "RichEditor-h2";
    case "header-three":
      return "RichEditor-h3";
    case "header-four":
      return "RichEditor-h4";
    case "header-five":
      return "RichEditor-h5";
    case "header-six":
      return "RichEditor-h6";
    default:
      return null;
  }
}

//block types
export const BLOCK_TYPES = [
  {
    label: <FontAwesomeIcon className="icon" icon="quote-right" />,
    style: "blockquote"
  },
  {
    label: <FontAwesomeIcon className="icon" icon="list-ul" />,
    style: "unordered-list-item"
  },
  {
    label: <FontAwesomeIcon className="icon" icon="list-ol" />,
    style: "ordered-list-item"
  },
  {
    label: <FontAwesomeIcon className="icon" icon="code" />,
    style: "code-block"
  },
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" }
];
//headers
// export const HEADER_TYPES = [
//   { label: "H1", style: "header-one" },
//   { label: "H2", style: "header-two" },
//   { label: "H3", style: "header-three" },
//   { label: "H4", style: "header-four" },
//   { label: "H5", style: "header-five" },
//   { label: "H6", style: "header-six" }
// ];
