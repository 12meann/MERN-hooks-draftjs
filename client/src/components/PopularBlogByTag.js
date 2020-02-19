import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import blogImg from "../images/blog1.png";
import { useParams } from "react-router-dom";
import BlogCard from "./BlogCard";
import defaultBlogImg from "../images/defaultBlogImg.jpg";
import "../scss/globals.scss";
import moment from "moment";
import PopularTagsBox from "./PopularTagsBox";
import PinnedPostsBox from "./PinnedPostsBox";
import { BlogContext } from "../context/BlogContext";

const PopularBlogByTag = () => {
  //context
  const { blogState, fetchPopularBlogs } = useContext(BlogContext);
  const { loading, blogs, error } = blogState;

  const { taglink } = useParams();
  useEffect(() => {
    fetchPopularBlogs(taglink);
  }, [taglink]);
  console.log(blogs);
  console.log(taglink);
  return (
    <section className="recentBlogs">
      <Hero image={blogImg} heroTitle="Blogs" heroSubtitle={taglink} />
      <div className="mainBlogSection">
        <div className="blogs">
          {error ? <p>{error}</p> : null}
          {loading ? <p>Loading...</p> : null}

          {blogs ? (
            blogs.map(blog => (
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
            <p>No blog post yet.</p>
          )}
        </div>
        <div className="side">
          <PinnedPostsBox />
          <PopularTagsBox />
        </div>
      </div>
    </section>
  );
};

export default PopularBlogByTag;
