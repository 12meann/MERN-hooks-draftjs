import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import defaultBlogImg from "../images/defaultBlogImg.jpg";
import Hero from "../components/Hero";
import moment from "moment";
import "../scss/globals.scss";
import "../scss/editor.scss";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import {
  getBlockStyle,
  styleMap
} from "../components/Editor/blockStyles/BlockStyles";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditImage from "../components/Admin/EditImage";
import BlogSettingsButton from "../components/Admin/BlogSettingsButton";

const BlogItem = () => {
  //context
  const { blogState, getBlog } = useContext(BlogContext);
  const { state } = useContext(AuthContext);
  const { loading, blog, error } = blogState;
  const { isAuthenticated } = state;
  const { blogId } = useParams();
  const body = blog && convertFromRaw(JSON.parse(blog.body));

  useEffect(() => {
    getBlog(blogId);
  }, []);

  const handleClickEdit = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const tagList = blog
    ? blog.tags
      ? blog.tags.map(tag => <li key={tag}>{tag}</li>)
      : null
    : null;

  return (
    <>
      <Hero image={blog.headerImg || defaultBlogImg} heroTitle={blog.title}>
        <small className="date">
          published last : {moment(blog.createdAt).format("LL")}
        </small>

        {blog.createdAt !== blog.updatedAt ? (
          <small className="date">
            updated last: {moment(blog.updatedAt).format("LL")}
          </small>
        ) : null}
        {isAuthenticated && (
          <EditImage blogId={blog._id} handleClickEdit={handleClickEdit} />
        )}
      </Hero>
      <div className="blogItem">
        {isAuthenticated && (
          <BlogSettingsButton
            blogId={blog._id}
            handleClickEdit={handleClickEdit}
          />
        )}
        {blog.isPinned && (
          <div className="isPinned">
            <span className="pinnedText">
              <FontAwesomeIcon icon="bookmark" className="bookmark" /> PINNED
              BLOG
            </span>
          </div>
        )}

        <div className="editor">
          {loading ? <p>Loading...</p> : null}
          {error ? <p>{error}</p> : null}
          <section className="RichEditor-editor">
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={
                blog
                  ? EditorState.createWithContent(body)
                  : EditorState.createEmpty()
              }
              readOnly={true}
            />
          </section>
        </div>
        <div className="tags">
          <h3>TAGS</h3>
          <ul className="input-tag__tags">{tagList}</ul>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
