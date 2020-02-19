import React from "react";
import { RichUtils } from "draft-js";
import BlockStyleToolbar from "./blockStyles/BlockStyleToolbar";
import InlineStyleToolbar from "./inlineStyles/InlineStyleToolbar";

const EditorButtons = ({
  setEditorState,
  editorState,
  EmojiSelect,
  linkPlugin
}) => {
  return (
    <div className="RichEditor-buttons">
      <div className="RichEditor-controls">
        <InlineStyleToolbar
          editorState={editorState}
          onToggle={inLineStyle =>
            setEditorState(
              RichUtils.toggleInlineStyle(editorState, inLineStyle)
            )
          }
        />
        <BlockStyleToolbar
          onToggle={blockType =>
            setEditorState(RichUtils.toggleBlockType(editorState, blockType))
          }
          editorState={editorState}
        />
        <EmojiSelect />
      </div>
    </div>
  );
};

export default EditorButtons;
