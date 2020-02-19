// import React, { Component } from "react";
// import { Editor, EditorState, convertFromRaw } from "draft-js";
// import axios from "axios";
// import { getBlockStyle, styleMap } from "./blockStyles/BlockStyles";
// import "../../scss/editor.scss";

// class ShowBlog extends Component {
//   state = {
//     blogs: []
//   };
//   async componentDidMount() {
//     try {
//       const res = await axios.get("/blog");
//       console.log("blog from db", res.data);
//       this.setState({
//         blogs: res.data
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   render() {
//     const { blogs } = this.state;
//     const blogList = blogs
//       ? blogs.map(blog => {
//           console.log("blog body", blog.body);
//           const body = convertFromRaw(JSON.parse(blog.body));
//           console.log("convertfromraw body", body);
//           const editorState = EditorState.createWithContent(body);
//           console.log(editorState);
//           return (
//             <li key={blog._id}>
//               <section className="RichEditor-editor">
//                 <Editor
//                   blockStyleFn={getBlockStyle}
//                   customStyleMap={styleMap}
//                   editorState={editorState}
//                   readOnly={true}
//                 />
//               </section>
//             </li>
//           );
//         })
//       : null;
//     return <div>{blogList}</div>;
//   }
// }

// export default ShowBlog;

// import React, { useState, useEffect } from "react";
// import { Editor, EditorState, convertFromRaw } from "draft-js";
// import { getBlockStyle, styleMap } from "./blockStyles/BlockStyles";
// import "../../scss/editor.scss";

// const ShowBlog = ({ blog }) => {
//   console.log(blog);
//   const [loading, setLoading] = useState(false);

//   const displayBlog = content => {
//     const body = convertFromRaw(JSON.parse(content));
//     console.log("convertfromraw body", body);
//     const editorState = EditorState.createWithContent(body);
//     return editorState;
//   };

//   // const body = blog ? convertFromRaw(JSON.parse(blog.body)) : null;
//   // console.log("convertfromraw body", body);
//   // blog
//   //   ? setEditorState(
//   //       EditorState.createWithContent(convertFromRaw(JSON.parse(blog.body)))
//   //     )
//   //   : null;
//   // console.log(editorState);

//   // console.log("blog body", blog ? blog.body : "loading");
//   //           console.log("convertfromraw body", body);
//   //           const editorState = EditorState.createWithContent(body);
//   //           console.log(editorState);

//   return (
//     <div className="editor">
//       <section className="RichEditor-editor">
//         {blog ? (
//           <>
//             <Editor
//               blockStyleFn={getBlockStyle}
//               customStyleMap={styleMap}
//               editorState={displayBlog(blog.body)}
//               readOnly={true}
//             />
//           </>
//         ) : (
//           <p>loading...</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShowBlog;
