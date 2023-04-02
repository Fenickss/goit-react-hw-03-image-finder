import React from "react";
// import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImgClick }) => (
  <ul className={s.ImageGallery}>
    {images &&
      images.map((image) => {
        return (
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            largeImage={image.largeImageURL}
            key={image.id}
            onModal={onImgClick}
          />
        );
      })}
  </ul>
);

export default ImageGallery;
