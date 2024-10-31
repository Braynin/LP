
import Hero from "./Hero";
import ProductsCard from "./ProductsCard";
import styles from "./Main.module.css";
import Offers from "./Offers";

function Main({filteredProducts}) {
    
    
    
    return(
        <main className={styles.main}>
    <Hero />
    <ProductsCard filteredProducts={filteredProducts} />
    <Offers />
</main>
    )
    
   
}
export default Main;