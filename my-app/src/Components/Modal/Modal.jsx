import { Component } from "react";
import s from "./Modal.module.css";
import PropTypes from "prop-types";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdpropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div className={s.Overlay} onClick={this.handleBackdpropClick}>
        <div className={s.Modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Modal;
