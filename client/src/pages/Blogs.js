import React from "react";
import Hero from "../components/Hero";
import blogImg from "../images/blog1.png";
import RecentBlogs from "../components/RecentBlogs";
import PopularTagsBox from "../components/PopularTagsBox";
import PinnedPostsBox from "../components/PinnedPostsBox";

const Blogs = () => {
  return (
    <section className="recentBlogs">
      <Hero image={blogImg} heroTitle="Blogs" />
      <div className="mainBlogSection">
        <RecentBlogs />
        <div className="side">
          <PinnedPostsBox />
          <PopularTagsBox />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
