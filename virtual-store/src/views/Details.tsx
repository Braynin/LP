/*Components*/
import Footer from "../components/Footer.tsx";
import MainDetails from "../components/MainDetails.tsx";
import Header from "../components/Header.tsx";

function Details() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MainDetails />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Details;
