import React from "react";
import "../Button/Button.scss";

function Button({ setPage, page }) {
  const clickHendlerPrevious = () => {
    setPage(page - 1);
    console.log(page, "----1");
  };

  const clickHendlerNext = () => {
    setPage(page + 1);
    console.log(page, "+++1");
  };

  return (
    <div className="box_button">
      <button disabled={page === 0} onClick={clickHendlerPrevious}>
        Previous
      </button>
      <button disabled={page === 3} onClick={clickHendlerNext}>
        Next
      </button>
    </div>
  );
}

export default Button;
