import { Component } from "react";
import style from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;

    if (prevName !== nextName) {
      console.log("изменилось имя");

      fetch(
        `https://pixabay.com/api/?key=24463326-9b2d5a427846ea9fa30299421&image_type=all/1`
      )
        .then((res) => {
          return res.json();
        })
        .then((img) => console.log(img));
    }
  }
  render() {
    return (
      <li className={style.ImageGalleryItem}>
        <img
          className={style.ImageGalleryItem_image}
          src={this.props.imgName}
          alt="#"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
