import React, { useState, useContext } from "react";
import BlogEditor from "../Editor/BlogEditor";
import "../../scss/addBlog.scss";
import Tags from "./Tags";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { BlogContext } from "../../context/BlogContext";
import { Redirect } from "react-router-dom";

const EditBlog = () => {
  //context
  const { blogState, updateBlog } = useContext(BlogContext);
  const { titleErr, success, blog, error } = blogState;
  //state
  const [title, setTitle] = useState(blog.title);
  const [editorState, setEditorState] = useState(
    blog && EditorState.createWithContent(convertFromRaw(JSON.parse(blog.body)))
  );
  const [tags, setTags] = useState(blog.tags);
  const [isPinned, setIsPinned] = useState(blog.isPinned);
  const [editorErr, setEditorErr] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setEditorErr("");
    if (editorState.getCurrentContent().hasText()) {
      const contentRaw = convertToRaw(editorState.getCurrentContent());
      const updatedBlog = {
        title,
        body: JSON.stringify(contentRaw),
        isPinned,
        tags
      };
      updateBlog(blog._id, updatedBlog);
    } else {
      setEditorErr("Content must not be empty");
    }
  };
  if (success) {
    return (
      <Redirect
        to={{
          pathname: `/blog/${blog._id}`
        }}
      />
    );
  }

  return (
    <div className="addBlog">
      {success && <p>{success}</p>}
      {error && <p className="error">{error}</p>}

      <section className="form">
        <h2>Update Blog</h2>
        <form>
          <div className="checkbox item">
            <label htmlFor="isPinned">
              <input
                type="checkbox"
                name="isPinned"
                value={isPinned}
                onChange={() => setIsPinned(!isPinned)}
              />{" "}
              &nbsp; Pin this post
            </label>
          </div>
          <div className="title item">
            <label htmlFor="title">Blog Title:</label>
            <input
              type="text"
              maxLength="60"
              value={title}
              name="title"
              className={
                titleErr ? (titleErr.length >= 1 ? "hasError" : "") : ""
              }
              onChange={e => setTitle(e.target.value)}
            />
            <small className="errorMsg">{titleErr}</small>
          </div>
          <div className="editor">
            <p>Blog Content Editor: </p>
            <BlogEditor
              editorState={editorState}
              setEditorState={setEditorState}
              editorErr={editorErr}
            />
            {editorErr && <small>{editorErr}</small>}
          </div>
          <Tags tags={tags} setTags={setTags} />

          <div className="postBlog">
            <button onClick={handleSubmit}>Publish Post</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditBlog;
