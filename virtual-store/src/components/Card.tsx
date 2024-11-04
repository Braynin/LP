import { Link } from "react-router-dom";

import styles from "./Card.module.css";
function CreateCard({ option }) {
  return (
    <Link className={styles["product-card"]} to={`/details?id=${option.id}`}>
      <img
        className={styles["product-img"]}
        src={option.imagen}
        alt={option.nombre}
      />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{option.nombre}</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>
            S/.{option.precioMenor}
          </span>
        </div>
        <div className={styles["product-impuesto"]}>
          <span className={styles["product-igv"]}>IGV</span>
        </div>
      </div>
    </Link>
  );
}
export default function Cards({ filteredProducts }: any) {
  console.log(filteredProducts);
  return filteredProducts.map((option: any) => (
    <CreateCard key={option.id} option={option} />
  ));
}
