import React from "react";
import EditorButtons from "./EditorButtons";
import { RichUtils, getDefaultKeyBinding } from "draft-js";
import { getBlockStyle, styleMap } from "./blockStyles/BlockStyles";

//import plugins
import Editor from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";

//plugin styles
import "draft-js-emoji-plugin/lib/plugin.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "../../scss/editor.scss";

//create instance
const emojiPlugin = createEmojiPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: []
});

const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const { InlineToolbar } = inlineToolbarPlugin;

const BlogEditor = ({ editorState, setEditorState, editorErr }) => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const plugins = [emojiPlugin, inlineToolbarPlugin];

  // for shortcut keys to work(e.g. ctrl + B)
  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  //for tab 4 spaces
  const mapKeyToEditorCommand = e => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  //placeholder style
  let className = "RichEditor-editor";
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (
      contentState
        .getBlockMap()
        .first()
        .getType() !== "unstyled"
    ) {
      className += " RichEditor-hidePlaceholder";
    }
  }
  return (
    <div className={`RichEditor-root ${editorErr ? "hasError" : ""}`}>
      <EditorButtons
        editorState={editorState}
        setEditorState={setEditorState}
        EmojiSelect={EmojiSelect}
      />
      <EmojiSuggestions />
      <div className={className}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          keyBindingFn={mapKeyToEditorCommand}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
          placeholder="Start writing here..."
          spellCheck={true}
          plugins={plugins}
        />

        <InlineToolbar />
      </div>
    </div>
  );
};

export default BlogEditor;
