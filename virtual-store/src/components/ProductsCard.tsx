import styles from "./ProductsCards.module.css";

import Cards from "./Card.tsx";

function ProductsCard({ filteredProducts }) {
  return (
    <div className={styles["products-container"]}>
      <h2 className={styles["content-subtitle"]}>Libros</h2>
      <div className={styles.products}>
        <Cards filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductsCard;
