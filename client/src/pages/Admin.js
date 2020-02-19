import React from "react";
import BlogEditor from "../components/Editor/BlogEditor";
import BlogEditor2 from "../components/Editor/BlogEditor2";
import Navbar from "../components/Navbar";
import Forms from "../components/Admin/Forms";
import ShowBlog from "../components/Editor/ShowBlog";

const Admin = () => {
  return (
    <>
      <Navbar />
      <BlogEditor />
      {/* <BlogEditor2 /> */}
      <ShowBlog />
      {/* <Forms /> */}
    </>
  );
};

export default Admin;
