import styles from "./ProductsCards.module.css";

import { Cards } from "./Card.tsx";
import CardsSection from "./SectionCards.tsx";
import arrayNavOptions from "../assets/NavOptions.js";

function ProductsCard({ filteredProducts, isFiltered }) {
  return (
    <div className={styles["products-container"]}>
      {isFiltered ? (
        filteredProducts.length > 0 ? (
          <Cards array={filteredProducts} />
        ) : (
          <p>No se encontraron productos.</p>
        )
      ) : (
        <CardsSection arrayNavOptions={arrayNavOptions} />
      )}
    </div>
  );
}

export default ProductsCard;
