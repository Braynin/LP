import Layout from "../components/Layout.tsx";
import styles from "./PoliticasDeEntrega.module.css";

const PoliticasDeEntrega = () => {
  return (
    <>
      <Layout>
        <div className={styles["politicasDeEntrega-container"]}>
          <h1>POLITICAS DE ENTREGRA</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default PoliticasDeEntrega;
