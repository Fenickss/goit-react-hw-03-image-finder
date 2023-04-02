import { Component } from "react";
import "./App.css";
import { fetchImages } from "./API/api";
import { Vortex } from "react-loader-spinner";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import ImageError from "./Components/ImageError";
import Modal from "./Components/Modal";

import Button from "./Components/Button";

class App extends Component {
  state = {
    imgName: "",
    images: null,
    status: "idle",
    error: "",
    page: 1,
    showModal: false,
    modalImage: "",
  };

  handleFormSubmit = (imgName) => {
    this.setState({ imgName, status: "resolved" });

    this.resetPage();
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imgName;
    const nextName = this.state.imgName;

    if (prevName !== nextName) {
      const { page } = this.state;
      this.setState({ status: "pending" });
      console.log("изменилось имя");

      try {
        const images = await fetchImages(nextName, page);

        this.setState({ images, status: "resolved" });

        this.IncrementPage();
      } catch (error) {
        this.setState({ error, status: "rejected" });
      }
    }
  }

  getImages = async () => {
    const { page, imgName } = this.state;
    this.IncrementPage();
    try {
      const newImage = await fetchImages(imgName, page);
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImage],
      }));

      console.log([...newImage]);
    } catch (error) {
      console.log("Smth wrong with App fetch", error);
      this.setState({ error });
    }
  };

  IncrementPage = () => {
    this.setState((prevState) => ({
      page: (prevState.page += 1),
    }));
  };

  resetPage = () => {
    this.setState((prevState) => ({
      page: (prevState.page = 1),
    }));
  };

  openModal = (largeImageURL) => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { status, images, error, modalImage, showModal } = this.state;
    if (status === "idle") {
      return <Searchbar onSubmit={this.handleFormSubmit} />;
    }
    if (status === "pending") {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery onImgClick={this.openModal} images={images} />
          <p>Загружаем......</p>
          <Vortex
            visible={true}
            height="150"
            width="150"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </>
      );
    }
    if (status === "rejected") {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery images={images} onImgClick={this.openModal} />
          <ImageError message={error.message} />
        </>
      );
    }
    if (status === "resolved") {
      return (
        <>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={modalImage} alt="largeImage" className="image" />
            </Modal>
          )}

          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery images={images} onImgClick={this.openModal} />
          <Button onClick={this.getImages} />
          {/* <Modal /> */}
        </>
      );
    }
  }
}

export default App;
