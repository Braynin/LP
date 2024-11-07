import {Hero} from "./Hero.js";
import ProdutsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";


function MainIndex({ filteredProducts }) {
  if (filteredProducts.length === 0) {
    return (
      <>
        <Hero />

        <Offers />
      </>
    );
  }

  return (
    <>
      <Hero />

      <ProdutsCard filteredProducts={filteredProducts} />
      <Offers />
    </>
  );
}
export default MainIndex;
