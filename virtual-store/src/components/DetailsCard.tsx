import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrayProducts from "../assets/ProductsOptions.js";
import styles from "./DetailsCard.module.css";

function DetailsCard() {
  const Query = new URLSearchParams(useLocation().search);
  const id = Query.get("id");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const product = arrayProducts.find((product) => product.id === id);
  useEffect(() => {
    if (product) {
      setPrice(product.precioMenor);
    }
  }, [product]);
  const changePrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    if (product) {
      setPrice(newQuantity * product.precioMenor);
    }
  };
  return (
    <>
      <div className={styles["details-container"]}>
        <section className={styles["product-images-block"]}>
          <img
            className={styles["big-img"]}
            id="big-img"
            src={product.imagen[0]}
            alt={product.nombre}
          />
        </section>
        <div className={styles["product-description-block"]}>
          <h1 className={styles["product-title"]}>{product.nombre}</h1>
          <span className={styles["product-description"]}>
            {product.description}
          </span>
        </div>
        <div className={styles["product-checkout-block"]}>
          <div className={styles["checkout-container"]}>
            <span className={styles["checkout-total-label"]}>Total:</span>
            <h2 id="price" className={styles["checkout-total-price"]}>
              S/.{price}
            </h2>
            <p className={styles["checkout-description"]}></p>
            <ul className={styles["checkout-policy-list"]}>
              <li>
                <a className={styles["policy-icon"]} href="#">
                  <img
                    className={styles["img-icon"]}
                    src="../public/iconPDF.webp"
                    alt="Plane"
                  />
                </a>

                <span className={styles["policy-desc"]}>
                  Descarga el índice
                </span>
              </li>
              <li>
                <a className={styles["policy-icon"]} href="#">
                  <img
                    className={styles["img-icon"]}
                    src="../public/delivery.webp"
                    alt="Plane"
                  />
                </a>
                <span className={styles["policy-desc"]}>
                  Recibe aproximadamente entre 3 a 5 días hábiles tu pedido.
                </span>
              </li>
            </ul>
            <div className={styles["checkout-process"]}>
              <div className={styles["top"]}>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={changePrice}
                />
                <a
                  href="https://wa.me/939613209"
                  className={styles["cart-btn"]}
                >
                  Compra aquí
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailsCard;
