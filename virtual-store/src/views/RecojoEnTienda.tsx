import Layout from "../components/Layout";
import styles from "./RecojoEnTienda.module.css";

const RecojoEnTienda = () => {
  return (
    <>
      <Layout>
        <div className={styles["recojoEnTienda-container"]}>
          <h1>RECOJO EN TIENDA</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default RecojoEnTienda;
