import arrayProducts from "../assets/ProductsOptions.js";
import styles from "./Sectioncards.module.css";
import { Template } from "./Card.tsx";
import { useRef } from "react";

// Función para obtener los productos filtrados por sección
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

export default function CardsSection({ arrayNavOptions }) {
  const productsPerPage = 3; // Número de productos visibles por página
  const containerRef = useRef(null); // Referencia para el contenedor de productos

  // Función para mover el slider (izquierda o derecha)
  const scrollToProduct = (direction: string) => {
    const container = containerRef.current;

    if (!container) return;

    // El ancho de un producto (cada producto tiene un 33.33% del contenedor)
    const productWidth = container.clientWidth / productsPerPage;

    if (direction === "next") {
      container.scrollLeft += productWidth; // Desplazar a la derecha
    } else {
      container.scrollLeft -= productWidth; // Desplazar a la izquierda
    }
  };

  return (
    <div className={styles["products"]}>
      {arrayNavOptions.map((option: any, sectionIndex: number) => {
        const sectionProducts = ProductsforSection(option.text); // Obtener productos de la sección actual

        return (
          <div className={styles["card-section"]} key={sectionIndex}>
            <h3 className={styles["card-section-title"]}>{option.text}</h3>
            <div className={styles["card-section-products"]}>
              {/* Slider de productos */}
              <div className={styles["slider-container"]}>
                {/* Flechas de navegación */}
                <div
                  className={styles["leftArrow"]}
                  onClick={() => scrollToProduct("prev")}
                >
                  &#8249;
                </div>
                <div
                  className={styles["rightArrow"]}
                  onClick={() => scrollToProduct("next")}
                >
                  &#8250;
                </div>

                {/* Contenedor de productos que se mueven de uno en uno */}
                <div
                  ref={containerRef}
                  className={styles["product-list-container"]}
                  style={{
                    overflowX: "auto", // Habilitamos el scroll horizontal
                    scrollSnapType: "x mandatory", // Forzamos el scroll horizontal en pasos
                    display: "flex",
                  }}
                >
                  {/* Lista de productos */}
                  {sectionProducts.map((product) => (
                    <div
                      key={product.id}
                      className={styles["product-item"]}
                      style={{ flex: "0 0 auto", scrollSnapAlign: "center" }} // Alineamos los productos
                    >
                      <Template array={[product]} /> {/* Asumimos que Template recibe un array */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
