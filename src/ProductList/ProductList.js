import React from "react";
import "../ProductList/ProductList.scss";

function ProductList({ data }) {
  console.log(data);
  return (
    <>
      {data.map((prod) => {
        return (
          <div key={prod.id} className="conteiner">
            <h3 className="conteiner_title">{prod.title}</h3>
            <p className="conteiner_text">{prod.description}</p>
            <p>{prod.price}$</p>
          </div>
        );
      })}
    </>
  );
}

export default ProductList;
