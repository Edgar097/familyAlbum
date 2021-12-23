import React from "react";
import PropTypes from "prop-types";
import ImageForm from "./ImageForm";
import axios from "axios";
import { useQuery } from "react-query";

const AlbumPage = ({ id, accessToken }) => {
  const url = "https://family-album-pr.herokuapp.com";
  const getAlbumsPhotos = async () => {
    const data = await axios.get(`${url}/api/getAlbum`, {
      params: {
        accessToken: accessToken,
        albumId: id,
      },
    });
    return data;
  };
  const { data: albumPhotos, status: albumPhotosLoading } = useQuery(
    "albumsPhoto",
    () => getAlbumsPhotos()
  );
  return (
    <div>
      {!(typeof albumPhotos === "undefined") &&
        albumPhotos.data &&
        albumPhotos.data.mediaItems &&
        albumPhotos.data.mediaItems.map((media, key) => {
          console.log(media.baseUrl);
          return (
            <img
              key={key}
              src={media.baseUrl}
              alt={media.filename}
              width="100px"
              height="100px"
            />
          );
        })}
    </div>
  );
};

AlbumPage.propTypes = {
  id: PropTypes.string,
};

export default AlbumPage;
