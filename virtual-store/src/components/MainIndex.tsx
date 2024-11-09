import { Hero } from "./Hero.js";
import ProdutsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";

function MainIndex({ filteredProducts, isFiltered, selectedSection }) {
  return (
    <>
      <Hero />
      <ProdutsCard
        filteredProducts={filteredProducts}
        isFiltered={isFiltered}
        selectedSection={selectedSection}
      />
      <Offers />
    </>
  );
}
export default MainIndex;
