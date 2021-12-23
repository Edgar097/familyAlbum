import React, { useState } from "react";
import axios from "axios";

const ImageForm = ({ accessToken, albumId }) => {
  const [file, setFile] = useState(null);
  const [imgFile, setImgFile] = useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://family-album-pr.herokuapp.com";
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("file", file[x]);
    }
    await axios.post(`${url}/api/upload`, data).then((res) => {
      console.log("Respond", res);
    });
    await axios
      .post(`${url}/api/uploadToGoogle`, null, {
        params: {
          accessToken: accessToken,
          albumId: albumId,
        },
      })
      .then((res) => {
        console.log("Respond", res);
      });
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="file">Upload File:</label>
          <input
            className="form-control-file mb-3"
            type="file"
            id="file"
            multiple
            onChange={handleFileChange}
          />

          <button className="btn btn-primary mt-3" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      </form>
      {/* Display Image Here */}
    </div>
  );
};

export default ImageForm;
