import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";
const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className={style.Button} type="button">
        Load more
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
