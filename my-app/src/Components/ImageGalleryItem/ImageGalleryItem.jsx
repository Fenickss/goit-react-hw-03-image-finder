import React from "react";

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, id, largeImage, onModal }) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={id}
        className={s.ImageGalleryItem_image}
        onClick={() => onModal(largeImage)}
      />
    </li>
  );
};

export default ImageGalleryItem;
