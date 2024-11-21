import Layout from "../components/Layout";
import styles from "./TerminosYCondiciones.module.css";

const TerminosYCondiciones = () => {
  return (
    <>
      <Layout>
        <div className={styles["terminosYCondiciones-container"]}>
          <h1>Terminos y condiciones</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default TerminosYCondiciones;
