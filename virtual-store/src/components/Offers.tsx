import styles from "./Offers.module.css";
import OffersCard from "./OffersCard.tsx";

function Offers() {

    return (
        
        <div className={styles["offers-container"]}>
            <h2 className={styles["offers-subtitle"]}>Ofertas</h2>
            <div className={styles.offers}>
                <OffersCard />
            </div>
        </div>
    )
}

export default Offers;