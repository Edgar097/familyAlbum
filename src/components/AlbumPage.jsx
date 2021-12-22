import React from "react";
import PropTypes from "prop-types";
import ImageForm from "../components/ImageForm";

const AlbumPage = ({ id }) => {
  return (
    <div>
      <ImageForm />
      {id}
    </div>
  );
};

AlbumPage.propTypes = {
  id: PropTypes.string,
};

export default AlbumPage;
