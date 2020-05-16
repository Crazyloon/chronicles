import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

const ImageUpload = ({mode, onChange}) => {
  let [files, setFiles] = useState([]);

  return ( 
    <div className='img-upload'>
      <h4 className='img-upload-heading'>Select images on your device to upload</h4>
      <div className='img-upload-btn-container'>
        <div className='img-upload-btn'>
          <FontAwesomeIcon icon={faFileUpload} size='6x' />
          <div class='btn btn-primary btn-block'>Select Images</div>
        </div>
      </div>
    </div>
   );
}
 
export default ImageUpload;