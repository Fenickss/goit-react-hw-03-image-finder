import { Component } from "react";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    return (
      <ul className={style.ImageGallery}>
        <>
          <ImageGalleryItem imgName={this.props.imgName} />
        </>
      </ul>
    );
  }
}

export default ImageGallery;
