import Layout from "../components/Layout";
import styles from "./PoliticasDeCookies.module.css";

const PoliticasDeCookies = () => {
  return (
    <>
      <Layout>
        <div className={styles["politicasDeCookies-container"]}>
          <h1>Politicas de Cookies</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default PoliticasDeCookies;
