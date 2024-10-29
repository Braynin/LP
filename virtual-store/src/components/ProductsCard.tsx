import styles from "./ProductsCards.module.css";
import Card from "./Card.tsx";

function ProdutsCard(){
    return (  
        <div className={styles["products-container"]}>
        <h2 className={styles["content-subtitle"]}>Libros</h2>
        <div className={styles.products}>
        <Card />
        </div>
      </div>
      )}

export default ProdutsCard;
