import styles from "./App.module.css";




/*Components*/
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main.tsx";

function Home() {


  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <main>
       <Main />
      </main>
      <footer>
        <div className={styles["footer-container"]}>
          <div className={styles["footer-section"]}>
            <h4 className={styles["footer-title"]}>Servicio al cliente</h4>
            <ul className={styles["footer-options"]}>
              <li>
                <a className={styles["footer-option"]} href="#">
                  Opiniones de clientes
                </a>
              </li>
              <li>
                <a className={styles["footer-option"]} href="#">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a className={styles["footer-option"]} href="#">
                  Cambios y Devoluciones
                </a>
              </li>
              <li>
                <a className={styles["footer-option"]} href="#">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-section"]}>
            <h4 className={styles["footer-title"]}>Libros Juridicos</h4>
            <ul className={styles["footer-options"]}>
              <li>
                <a className={styles["footer-option"]} href="#">
                  Libros de Civil
                </a>
              </li>
              <li>
                <a className={styles["footer-option"]} href="#">
                  Libros de Penal
                </a>
              </li>
              <li>
                <a className={styles["footer-option"]} href="#">
                  Packs
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-section"]}>
            <h4 className={styles["footer-title"]}>¿Consultas?</h4>
            <a className={styles["footer-option"]} href="tel:+51997743461">
              +51 997 743 461
            </a>
            <h4 className={styles["footer-title"]}>Síguenos en</h4>
            <ul className={styles["social-links"]}>
              <li className={styles["header-li"]}>
                <a href="https://www.facebook.com/lpderecho">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={
                      styles[
                        "icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"
                      ]
                    }
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1  a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"></path>
                  </svg>
                </a>
              </li>

              <li className={styles["header-li"]}>
                <a href="https://wa.me/939613209">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={
                      styles[
                        "icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
                      ]
                    }
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                  </svg>
                </a>
              </li>

              <li className={styles["header-li"]}>
                <a href="https://www.instagram.com/lpderecho">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={
                      styles[
                        "icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                      ]
                    }
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>
              </li>

              <li className={styles["header-li"]}>
                <a href="https://www.tiktok.com/@editorial.lp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={
                      styles[
                        "icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok"
                      ]
                    }
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"></path>
                  </svg>
                </a>
              </li>

              <li className={styles["header-li"]}>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={
                      styles[
                        "icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"
                      ]
                    }
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <script src="scripts/layout.js"></script>
      <script src="scripts/products.js"></script>
      <script src="scripts/index.js"></script>
      <script src="scripts/ofertas.js"></script>

      <script></script>
    </>
  );
}

export default Home;
