import { Link } from "react-router-dom";

import styles from "./Card.module.css";
function CreateCard({ offer }) {
  return (
    <Link className={styles["product-card"]} to={`/details?id=${offer.id}`}>
      <img
        className={styles["product-img"]}
        src={offer.imagen} 
        alt={offer.nombre}
      />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{offer.nombre}</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>
            S/.{offer.precioMenor}
          </span>
        </div>
        <div className={styles["product-impuesto"]}>
          <span className={styles["product-igv"]}>IGV</span>
        </div>
      </div>
    </Link>
  );
}

function Template({ array }: { array: any[] }) {
  return array.map((option) => <CreateCard key={option.id} offer={option} />);
}
function Cards({ array }: any) {
  return <div className={styles["products"]}>{Template({ array })}</div>;
}

export { Cards, Template };
