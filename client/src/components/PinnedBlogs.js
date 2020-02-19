import React, { useContext, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import defaultBlogImg from "../images/defaultBlogImg.jpg";
import moment from "moment";
import { BlogContext } from "../context/BlogContext";

const PinnedBlogs = () => {
  //context
  const { blogState, fetchPinnedBlogs } = useContext(BlogContext);
  const { loading, blogs, error } = blogState;

  useEffect(() => {
    fetchPinnedBlogs();
  }, []);
  return (
    <div className="blogs">
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}
      {blogs ? (
        blogs.slice(0, 6).map(blog => (
          <li key={blog._id} className="blog">
            <BlogCard
              blogImg={blog.headerImg || defaultBlogImg}
              altImage={blog.title}
              title={blog.title}
              blogLink={`/blog/${blog._id}`}
            >
              <small className="time">
                {moment(blog.createdAt).format("MMM Do YY")}
              </small>
            </BlogCard>
          </li>
        ))
      ) : (
        <p>No pinned post yet.</p>
      )}
    </div>
  );
};

export default PinnedBlogs;
