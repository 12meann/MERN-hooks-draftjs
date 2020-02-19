import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import Contact from "../../pages/Contact";
import Services from "../../pages/Services";
import Register from "../../pages/Register";
import About from "../../pages/About";
import Blogs from "../../pages/Blogs";
import BlogItem from "../../pages/BlogItem";
import Photography from "../../pages/Photography";
import Login from "../../pages/Login";
import SampleImagesProvider from "../../context/SampleImages";
import Footer from "../Footer";
import PopularBlogByTag from "../PopularBlogByTag";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/admin/register" component={Register} />
      <Route exact path="/admin/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog/:blogId" component={BlogItem} />
      <Route exact path="/blog" component={Blogs} />
      <Route
        exact
        path="/blog/populartags/:taglink"
        component={PopularBlogByTag}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/services" component={Services} />
      <SampleImagesProvider>
        <Route exact path="/photography" component={Photography} />
      </SampleImagesProvider>
      <Footer />
    </>
  );
};

export default PublicLayout;
