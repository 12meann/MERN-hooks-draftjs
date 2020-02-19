import React from "react";

// import { HEADER_TYPES } from "./BlockStyles";

const HeaderStylesDropdown = ({ onToggle, active }) => {
  return (
    <select value={active} onChange={e => onToggle(e.target.value)}>
      <option value="">Header Types</option>
      {/* {HEADER_TYPES.map(heading => {
        return (
          <option key={heading.style} value={heading.style}>
            {heading.label}
          </option>
        );
      })} */}
    </select>
  );
};

export default HeaderStylesDropdown;
