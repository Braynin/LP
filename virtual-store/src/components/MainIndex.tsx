import { Hero } from "./Hero.js";
import ProductsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";

function MainIndex({ filteredProducts, isFiltered, selectedSection }) {
  return (
    <>
      <Hero />
      <ProductsCard
        filteredProducts={filteredProducts}
        isFiltered={isFiltered}
        selectedSection={selectedSection}
      />
      <Offers />
    </>
  );
}
export default MainIndex;
