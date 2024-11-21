import Layout from "../components/Layout";
import styles from "./PreguntasFrecuentes.module.css";

const PreguntasFrecuentes = () => {
  return (
    <>
      <Layout>
        <div className={styles["preguntasFrecuentes-container"]}>
          <h1>Preguntas Frecuentes</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default PreguntasFrecuentes;
