import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import ThumbnailGallery from '../../../thumbnail/thumbnail-gallery';

const ImageUpload = ({ mode, images, onImagesChange }) => {
  return (
    <div className="img-select">
      <h4 className="img-select-heading">
        Select images on your device to upload
      </h4>
      <div className="img-select-btn-container">
        <div className="img-select-btn">
          <input tabIndex="14" onChange={onImagesChange} type="file" multiple />
          <div className="img-select-icon">
            <FontAwesomeIcon icon={faFileUpload} size="6x" />
          </div>
          <button type="button" className="btn btn-block btn-secondary">
            Upload a file
          </button>
        </div>
      </div>
      <div className='selected-img-thumbnails'>
        <ThumbnailGallery thumbnails={images} />
      </div>
    </div>
  );
};

export default ImageUpload;
