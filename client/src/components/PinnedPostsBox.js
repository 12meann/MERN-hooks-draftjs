import React, { useContext, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const PinnedPostsBox = () => {
  //context
  const { blogState, fetchPinnedBlogs } = useContext(BlogContext);
  const { loading, pinnedBlogs, error } = blogState;

  useEffect(() => {
    fetchPinnedBlogs();
  }, []);

  const pinnedPostsList = pinnedBlogs
    ? pinnedBlogs.slice(0, 10).map(blog => (
        <li key={blog._id}>
          <Link to={`/blog/${blog._id}`}> {blog.title}</Link>{" "}
        </li>
      ))
    : null;
  return (
    <section className="pinnedPostsBox">
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}
      <h3>Pinned Blogs</h3>
      <ul>{pinnedPostsList}</ul>
    </section>
  );
};

export default PinnedPostsBox;
