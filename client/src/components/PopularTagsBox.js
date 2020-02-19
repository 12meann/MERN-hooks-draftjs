import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const PopularTagsBox = () => {
  //context
  const { blogState, fetchTags } = useContext(BlogContext);
  const { loading, popularTags, error } = blogState;

  useEffect(() => {
    fetchTags();
  }, []);

  const popularTagsList = popularTags
    ? popularTags.map(tags => (
        <li key={tags._id}>
          <Link to={`/blog/populartags/${tags._id}`}> {tags._id}</Link>{" "}
        </li>
      ))
    : null;
  return (
    <section className="popularTags">
      <h3>Popular Tags</h3>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading...</p> : null}
      <ul>{popularTagsList}</ul>
    </section>
  );
};

export default PopularTagsBox;
