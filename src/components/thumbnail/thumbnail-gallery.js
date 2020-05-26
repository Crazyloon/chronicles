import React from "react";
import ThumbNail from "./thumbnail";

const ThumbNailGallery = ({ thumbnails }) => {
  if (!thumbnails) return null;

  return (
    <div className="thumbnail-section mb-3 bg-w">
      {thumbnails.map((thumbnail, i) => (
        <ThumbNail
          key={i}
          src={thumbnail.src}
          alt={thumbnail.alt}
          caption={thumbnail.caption}
        />
      ))}
    </div>
  );
};

export default ThumbNailGallery;
