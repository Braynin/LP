import DetailsCard from "./DetailsCard";
import Offers from "./Offers";
import ProdutsCard from "./ProductsCard";

function MainDetails({ filteredProducts, isFiltered }) {
  if (filteredProducts.length === 0) {
    return (
      <>
        <DetailsCard />

        <Offers />
      </>
    );
  }
  return (
    <>
      <ProdutsCard
        filteredProducts={filteredProducts}
        isFiltered={isFiltered}
      />
      <Offers />
    </>
  );
}
export default MainDetails;
