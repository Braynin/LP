import arrayProducts from "../assets/ProductsOptions.js";
import styles from "./Sectioncards.module.css";
import { Template } from "./Card.tsx";

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
  return (
    <div className={styles["products"]}>
      {arrayNavOptions.map((option: any) => (
        <div className={styles["card-section"]}>
          <h3 className={styles["card-section-title"]}>{option.text}</h3>
          <div className={styles["card-section-products"]}>
            <Template array={ProductsforSection(option.text)} />
          </div>
        </div>
      ))}
    </div>
  );
}
