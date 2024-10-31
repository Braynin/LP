import styles from "./ProductsCards.module.css";
import Card from "./Card.tsx";


function ProductsCard({filteredProducts}){
 
    return (  
        <div className={styles["products-container"]}>
        <h2 className={styles["content-subtitle"]}>Libros</h2>
        <div className={styles.products}>
        {filteredProducts.map(product => (
                    <Card key={product.id} option={product} /> // Asegúrate de pasar la opción correctamente
                ))}
        
        </div>
      </div>
      )}

export default ProductsCard;
