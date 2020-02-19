import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogContext } from "../../context/BlogContext";

const EditImage = ({ blogId, handleClickEdit }) => {
  //context
  const { editImage } = useContext(BlogContext);
  // const handleClickEdit = () => {
  //   const fileInput = document.getElementById("imageInput");
  //   fileInput.click();
  // };

  const handleEditImage = e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    editImage(blogId, formData);
  };
  return (
    <div className="editImage">
      <button onClick={handleClickEdit}>
        <FontAwesomeIcon icon="pencil-alt" className="editIcon" />
        <FontAwesomeIcon icon="file-image" className="editIcon" />
        Edit Image
      </button>

      <input
        type="file"
        id="imageInput"
        name="image"
        hidden="hidden"
        onChange={handleEditImage}
      />
    </div>
  );
};

export default EditImage;
