import Hero from "./Hero.tsx";
import ProdutsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";

function MainIndex({ filteredProducts }) {
  return (
    <>
      <Hero />
      <ProdutsCard filteredProducts={filteredProducts} />
      <Offers />
    </>
  );
}
export default MainIndex;
