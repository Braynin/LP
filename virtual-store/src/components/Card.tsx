import arrayProducts from "../assets/products.js";
import styles from "./Card.module.css";
function CreateCard(option: any) {
    return (
        <a className={styles["product-card"]} href="./details.html?id=1">
              <img
                className={styles["product-img"]}
                src=  {option.imagen}
                alt={option.nombre}
              />
              <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>
                {option.nombre}
                </span>
                <div className={styles["product-price-block"]}>
                  <span className={styles["product-price"]}>S/.{option.precioMenor}</span>
                </div>
                <div className={styles["product-impuesto"]}>
                  <span className={styles["product-igv"]}>IGV</span>
                </div>
              </div>
            </a>
    )
}
export default function Card(){
  return arrayProducts.map(CreateCard);
}


