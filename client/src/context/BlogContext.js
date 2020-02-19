import React, { createContext, useReducer } from "react";
import { blogReducer, initialState } from "../reducers/blogReducer";
import axios from "axios";

export const BlogContext = createContext();
const BlogContextProvider = props => {
  const [blogState, dispatch] = useReducer(blogReducer, initialState);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const fetchBlogs = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get("/blog");
      dispatch({ type: "FETCH_BLOGS", payload: res.data });
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error) {
      dispatch({ type: "FETCH_BLOGS_FAIL", payload: error.response.data });
    }
  };

  const addBlog = async blog => {
    dispatch({ type: "CLEAR_ERROR" });
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.post("/blog", blog, config);
      dispatch({ type: "ADD_BLOG", payload: res.data });
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
    } catch (error) {
      dispatch({ type: "ADD_BLOG_FAIL", payload: error.response.data });
    }
  };

  const editImage = async (blogId, formData) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.put(`/blog/${blogId}/editimage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      dispatch({ type: "EDIT_IMAGE", payload: res.data });

      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
    } catch (error) {
      dispatch({ type: "EDIT_IMAGE_FAIL", payload: error.response.data });
    }
  };

  const fetchPinnedBlogs = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get("/blog/pinnedposts");
      dispatch({ type: "FETCH_PINNED_BLOGS", payload: res.data });
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error) {
      dispatch({
        type: "FETCH_PINNED_BLOGS_FAIL",
        payload: error.response.data
      });
    }
  };
  const deleteBlog = async blogId => {
    try {
      const res = await axios.delete(`/blog/${blogId}`);
      dispatch({ type: "DELETE_BLOG", payload: res.data });
      dispatch({ type: "CLEAR_ERROR" });
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
    } catch (error) {
      dispatch({ type: "DELETE_BLOG_FAIL", payload: error.response.data });
    }
  };
  const getBlog = async blogId => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`/blog/${blogId}`);

      dispatch({ type: "GET_ONE_BLOG", payload: res.data });
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error) {
      dispatch({ type: "GET_ONE_BLOG_FAIL", payload: error.response.data });
    }
  };
  const updateBlog = async (blogId, updatedBlog) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.patch(`/blog/${blogId}`, updatedBlog, config);
      dispatch({ type: "UPDATE_BLOG", payload: res.data });
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error) {
      dispatch({ type: "UPDATE_BLOG_FAIL", payload: error.response.data });
    }
  };
  const fetchTags = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get("/blog/populartags");
      dispatch({ type: "FETCH_TAGS", payload: res.data });
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error) {
      dispatch({ type: "FETCH_TAGS_FAIL", payload: error.response.data });
    }
  };
  const fetchPopularBlogs = async taglink => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(`/blog/populartaglink/${taglink}`);
      dispatch({ type: "FETCH_BLOGS", payload: res.data });
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error) {
      dispatch({ type: "FETCH_BLOGS_FAIL", payload: error.response.data });
    }
  };
  return (
    <BlogContext.Provider
      value={{
        fetchBlogs,
        blogState,
        addBlog,
        getBlog,
        editImage,
        fetchPinnedBlogs,
        deleteBlog,
        updateBlog,
        fetchTags,
        fetchPopularBlogs
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
