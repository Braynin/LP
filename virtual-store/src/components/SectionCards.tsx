import { useState } from "react";
import arrayProducts from "../assets/ProductsOptions.js";
import styles from "./Sectioncards.module.css";
import { Template } from "./Card.tsx";

// Función para filtrar los productos por sección
function ProductsforSection(section: string) {
  return arrayProducts.filter((product) =>
    product.section
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(
        section
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
  );
}

export default function CardsSection({ arrayNavOptions, onSelectSection }) {
  // Utiliza un objeto para mantener el índice de inicio de cada sección
  const [startIndexes, setStartIndexes] = useState({});

  const visibleProducts = 4; // Número de productos visibles a la vez

  const scrollTo = (direction: string, section: string) => {
    const sectionProducts = ProductsforSection(section);
    const currentStartIndex = startIndexes[section] || 0;

    let newStartIndex;
    if (direction === "prev") {
      newStartIndex =
        currentStartIndex === 0
          ? sectionProducts.length - visibleProducts
          : currentStartIndex - 1;
    } else {
      newStartIndex =
        currentStartIndex + visibleProducts >= sectionProducts.length
          ? 0
          : currentStartIndex + 1;
    }

    // Actualiza el estado solo para la sección específica
    setStartIndexes((prevIndexes) => ({
      ...prevIndexes,
      [section]: newStartIndex,
    }));
  };

  return (
    <div className={styles["products"]}>
      {arrayNavOptions.map((option: any) => {
        const section = option.text;
        const startIndex = startIndexes[section] || 0;

        return (
          <div className={styles["card-section"]} key={section}>
            <h3 className={styles["card-section-title"]}>{section}</h3>
            <div className={styles["slider-container"]}>
              <div
                className={styles["leftArrow"]}
                onClick={() => scrollTo("prev", section)}
                aria-label="Anterior"
              >
                &#8249;
              </div>

              <div className={styles["slider"]}>
                <Template
                  array={ProductsforSection(section).slice(
                    startIndex,
                    startIndex + visibleProducts
                  )}
                  onSelectSection={onSelectSection}
                />
              </div>
              <div
                className={styles["rightArrow"]}
                onClick={() => scrollTo("next", section)}
                aria-label="Siguiente"
              >
                &#8250;
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
