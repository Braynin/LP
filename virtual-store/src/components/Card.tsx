import { Link } from "react-router-dom";
import "../index.css";
import styles from "./Card.module.css";

function CreateCard({ option }) {
  return (
    <div className={styles["card"]}>
      <Link to={`/details?id=${option.id}`} className={styles["product-card"]}>
        <img
          src={option.imagen[0]}
          alt={option.nombre}
          className={styles["product-img"]}
        />
        <div className={styles["product-info"]}>
          <span className={styles["brand"]}>{option.presentacion}</span>
          <p className={styles["product-title"]}>{option.nombre}</p>
          <div className={styles["product-price-block"]}>
            <p className={styles["current-price"]}>S/.{option.precioMenor}</p>
            {option.oldPrice && (
              <del className={styles["old-price"]}>S/.{option.oldPrice}</del>
            )}
            <div className={styles["icon"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus svg-icon"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

  

function Template({ array }) {
  return array.map((option) => <CreateCard key={option.id} option={option} />);
}
function Cards({ array }) {
  return <div className={styles["products"]}>{Template({ array })}</div>;
}

export { Cards, Template };
