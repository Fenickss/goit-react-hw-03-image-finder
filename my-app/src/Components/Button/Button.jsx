import React from "react";
import style from "./Button.module.css";
const Button = () => {
  return (
    <>
      <button className={style.Button} type="button">
        Load more
      </button>
    </>
  );
};

export default Button;
