import errorImage from "../ImageError/error.jpg";

const ImageError = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} alt="" width="240" />
      <p>{message}</p>
    </div>
  );
};
export default ImageError;
