export const initialState = {
  loading: false,
  error: "",
  success: "",
  blogs: [],
  blog: "",
  titleErr: null,
  popularTags: [],
  pinnedBlogs: []
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case "FETCH_BLOGS":
      return {
        ...state,
        loading: false,
        blogs: action.payload
      };
    case "FETCH_PINNED_BLOGS":
      return {
        ...state,
        loading: false,
        pinnedBlogs: action.payload
      };
    case "FETCH_TAGS":
      return {
        ...state,
        loading: false,
        popularTags: action.payload
      };
    case "FETCH_BLOGS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case "ADD_BLOG":
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.payload.newBlog],
        success: action.payload.success,
        error: "",
        blog: action.payload.newBlog
      };
    case "ADD_BLOG_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        titleErr:
          action.payload.errors &&
          action.payload.errors
            .filter(object => object.param === "title")
            .map(err => err.msg)
      };
    case "DELETE_BLOG":
      return {
        ...state,
        loading: false,
        blogs: [
          ...state.blogs.filter(
            blog => blog._id !== action.payload.deletedBlog._id
          )
        ],
        error: "",
        success: action.payload.success
      };
    case "DELETE_BLOG_FAIL":
    case "GET_ONE_BLOG_FAIL":
    case "UPDATE_BLOG_FAIL":
    case "EDIT_IMAGE_FAIL":
    case "FETCH_PINNED_BLOGS_FAIL":
    case "FETCH_TAGS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case "CLEAR_MSG":
      return {
        ...state,
        success: ""
      };
    case "GET_ONE_BLOG":
      return {
        ...state,
        loading: false,
        error: "",
        blog: action.payload
      };
    case "EDIT_IMAGE":
      return {
        ...state,
        loading: false,
        blog: {
          ...state.blog,
          headerImg: action.payload.updatedBlog.headerImg
        },
        success: action.payload.success
      };
    case "UPDATE_BLOG":
      return {
        ...state,
        loading: false,

        blogs: state.blogs.map(blog => {
          if (blog._id === action.payload.updatedBlog._id) {
            blog = action.payload.updatedBlog;
          }
          return {
            ...blog
          };
        }),
        error: "",
        blog: action.payload.updatedBlog,
        success: action.payload.success
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
        titleErr: null
      };
    default:
      return state;
  }
};
