import { Component } from "react";
import "./App.css";

import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

import Button from "./Components/Button";

class App extends Component {
  state = {
    imgName: "",
  };

  handleFormSubmit = (imgName) => {
    this.setState({ imgName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.imgName} />

        <Button />
      </>
    );
  }
}

export default App;
