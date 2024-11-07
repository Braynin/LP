import {Hero} from "./Hero.js";
import ProdutsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";

function MainIndex({ filteredProducts, isFiltered }) {
  return (
    <>
      <Hero />
      <ProdutsCard
        filteredProducts={filteredProducts}
        isFiltered={isFiltered}
      />
      <Offers />
    </>
  );
}
export default MainIndex;
