import { Component } from "react";
import { CiImageOn } from "react-icons/ci";

import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    imgName: "",
  };

  handeleImgNamechange = (event) => {
    this.setState({ imgName: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    const { imgName } = this.state;
    event.preventDefault();

    if (this.state.imgName.trim() === "") {
      alert("Введите имя картинки");
      return;
    }
    this.props.onSubmit(imgName);
    this.setState({ imgName: "" });
  };

  render() {
    const { imgName } = this.state;
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.button}>
            <CiImageOn style={{ width: 30, height: 30 }} />
            <span className={style.button_label}>Search</span>
          </button>

          <input
            onChange={this.handeleImgNamechange}
            className={style.input}
            value={imgName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
