import "./App.scss";
import Header from "../Header/Header";
import Button from "../Button/Button";
import ProductList from "../ProductList/ProductList";
import { getProductList } from "../api";
import { useEffect, useState, Fragment } from "react";

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    getProductList(page)
      .then((data) => {
        setData(
          data.map((el) => {
            return el;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);
  return (
    <Fragment>
      <Header />
      <div className="box">
        <ProductList data={data} />
      </div>
      <Button setPage={setPage} page={page} />
    </Fragment>
  );
}

export default App;
