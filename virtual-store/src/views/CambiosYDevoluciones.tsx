import Layout from "../components/Layout";
import styles from "./CambiosYDevoluciones.module.css";

const CambiosYDevoluciones = () => {
  return (
    <>
      <Layout>
        <div className={styles["cambiosYDevoluciones-container"]}>
          <h1>Cambios y Devoluciones</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default CambiosYDevoluciones;
