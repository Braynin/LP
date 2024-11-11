import styles from "./ProductsCards.module.css";

import { Cards } from "./Card.tsx";
import CardsSection from "./SectionCards.tsx";
import arrayNavOptions from "../assets/NavOptions.js";

function ProductsCard({ filteredProducts, isFiltered, selectedSection }) {

  return (
    <div className={styles["products-container"]}>
      {isFiltered ? (
        filteredProducts.length > 0 ? (
          <Cards array={filteredProducts} />
        ) : (
          <p>No se encontraron productos.</p>
        )
      ) : (
        <CardsSection
          arrayNavOptions={arrayNavOptions}
          onSelectSection={selectedSection}
        />
      )}
    </div>
  );
}

export default ProductsCard;
