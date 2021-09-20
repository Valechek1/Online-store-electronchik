import React, { Fragment } from "react";
import "../ProductList/ProductList.scss";

function ProductList({ data }) {
  return (
    <Fragment>
      {data.map((prod) => {
        return (
          <div key={prod.id} className="conteiner">
            <h3 className="conteiner_title">{prod.title}</h3>
            <p className="conteiner_text">{prod.description}</p>
            <h4 className="conteiner_price">{prod.price}$</h4>
          </div>
        );
      })}
    </Fragment>
  );
}

export default ProductList;
