import React, { useState } from "react";
import { imgExpandCollapse as collapse } from "../../constants/constants";

const ThumbNail = ({ src, alt = "thumbnail", caption, detail }) => {
  const [expand, setExpand] = useState(collapse.collapse);
  const transformImgScale = () => {
    if (expand === collapse.expand) {
      setExpand(collapse.collapse);
    } else {
      setExpand(collapse.expand);
    }
  };

  return (
    <div className="thumb">
      <img
        onClick={() => transformImgScale()}
        className={expand + " img-thumbnail"}
        src={src}
        alt={alt ? alt : "image thumbnail"}
      />
      {expand === collapse.expand ? <span className='thumb-caption'>{caption}</span> : null}
    </div>
  );
};

export default ThumbNail;
