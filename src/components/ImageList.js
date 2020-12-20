import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = (props) => {
  const image = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{image}</div>;
};

export default ImageList;
