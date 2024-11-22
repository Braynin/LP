import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrayProducts from "../assets/ProductsOptions.js";
import styles from "./DetailsCard.module.css";

function DetailsCard() {
  const Query = new URLSearchParams(useLocation().search);
  const id = Query.get("id");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const product = arrayProducts.find((product) => product.id === id);

  useEffect(() => {
    if (product) {
      setPrice(product.precioMenor);
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

  const changeMini = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const selectedSrc = (event.target as HTMLImageElement).src;
    const bigSelector = document.querySelector<HTMLImageElement>("#big-img");
    if (bigSelector) {
      bigSelector.src = selectedSrc;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();

    // Coordenadas relativas al contenedor
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    // Convertir las coordenadas relativas en porcentajes
    const x = (offsetX / width) * 100;
    const y = (offsetY / height) * 100;

    setZoomPosition({ x, y });
  };

  const renderMiniImages = (product) => {
    return product.imagen.map((img, index) => (
      <img
        key={index}
        className={styles["mini-img"]}
        src={img}
        alt={product.nombre}
        onClick={changeMini}
      />
    ));
  };

  return (
    <div className={styles["details-container"]}>
      <section className={styles["product-images-block"]}>
        <div className={styles["product-images"]}>
          {renderMiniImages(product)}
        </div>

        <div
          className={`${styles["big-img-container"]} ${
            isZoomed ? styles["zoomed"] : ""
          }`}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            className={styles["big-img"]}
            id="big-img"
            src={product.imagen[0]}
            alt={product.nombre}
            style={
              isZoomed
                ? {
                    transform: `scale(2) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`, // Centra el zoom según el cursor
                  }
                : undefined
            }
          />
        </div>
      </section>
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

              <span className={styles["policy-desc"]}>Descarga el índice</span>
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
              <a href="https://wa.me/939613209" className={styles["cart-btn"]}>
                Compra aquí
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="product-sipnosis-block">
        <h2>Sipnosis:</h2>
        <span className="product-sipnosis">{product.sipnosis}</span>
      </div>
      <div className={styles["product-information-block"]}>
        <ul className={styles["product-title"]}>
          <li>Detalles de producto:</li>
        </ul>
        <ul className={styles["product-details"]}>
          <li className={styles["product-description"]}>
            <strong>ISBN: </strong> {product.isbn}
          </li>
          <li className={styles["product-description"]}>
            <strong>Autor: </strong> {product.autor}
          </li>
          <li className={styles["product-description"]}>
            <strong>Editorial: </strong> {product.editorial}
          </li>
          <li className={styles["product-description"]}>
            <strong>Año: </strong> {product.año}
          </li>
          <li className={styles["product-description"]}>
            <strong>Páginas: </strong> {product.paginas}
          </li>
          <li className={styles["product-description"]}>
            <strong>Presentación: </strong> {product.presentacion}
          </li>
          <li className={styles["product-description"]}>
            <strong>Peso: </strong> {product.peso}
          </li>
          <li className={styles["product-description"]}>
            <strong>Alto: </strong> {product.alto}
          </li>
          <li className={styles["product-description"]}>
            <strong>Ancho: </strong> {product.ancho}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DetailsCard;
