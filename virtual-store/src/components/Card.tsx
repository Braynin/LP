import { Link } from "react-router-dom";

import styles from "./Card.module.css";
function CreateCard({ offer, onSelectSection }) {
  const handleClick = (section) => {
    onSelectSection(section);
  };
  return (
    <Link
      className={styles["product-card"]}
      to={`/details?id=${offer.id}`}
      onClick={() => handleClick(null)}
    >
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

function Template({
  array,
  onSelectSection,
}: {
  array: any[];
  onSelectSection: string;
}) {
  return array.map((option) => (
    <CreateCard
      key={option.id}
      offer={option}
      onSelectSection={onSelectSection}
    />
  ));
}
function Cards({ array, onSelectSection }: any) {
  return (
    <div className={styles["products"]}>
      {Template({ array, onSelectSection })}
    </div>
  );
}

export { Cards, Template };
