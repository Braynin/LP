import { Link } from "react-router-dom";
import styles from "./OffersCard.module.css";
function CreateOffersCard({ offer }) {
  return (
    <Link className={styles["offer-card"]} to={`/details?id=${offer.id}`}>
      <img
        className={styles["offer-img"]}
        src={offer.imagen}
        alt={offer.nombre}
      />
      <div className={styles["offer-info"]}>
        <span className={styles["offer-title"]}>{offer.nombre}</span>
        <div className={styles["offer-price-block"]}>
          <span className={styles["offer-price"]}>S/. {offer.precio}</span>
        </div>
        <div className={styles["offer-tax-policy"]}>
          <span className={styles["offer-discount"]}>IGV</span>
        </div>
      </div>
    </Link>
  );
}

function TemplateOffer({ array }: { array: any[] }) {
  return array.map((offer) => <CreateOffersCard key={offer.id} offer={offer} />);
}
function OffersCards({ array }: any) {
  return <div className={styles["offers"]}>{TemplateOffer({ array })}</div>;
}
export { OffersCards, TemplateOffer };