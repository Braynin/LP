import arrayOffers from "../assets/OffersOptions.js";
import styles from "./OffersCard.module.css";
function CreateOffersCard(offer: any) {
  return (
    <a className={styles["offer-card"]} href="./details.html?id=1">
      <img
        className={styles["offer-img"]}
        src={offer.imagen}
        alt={offer.nombre}
      />
      <div className={styles["offer-info"]}>
        <span className={styles["offer-title"]}>${offer.nombre}</span>
        <div className={styles["offer-price-block"]}>
          <span className={styles["offer-price"]}>S/. {offer.precio}</span>
        </div>
        <div className={styles["offer-tax-policy"]}>
          <span className={styles["offer-discount"]}>IGV</span>
        </div>
      </div>
    </a>
  );
}
export default function OffersCard() {
  return arrayOffers.map(CreateOffersCard);
}
