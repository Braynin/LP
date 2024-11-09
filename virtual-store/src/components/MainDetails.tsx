import DetailsCard from "./DetailsCard";
import Offers from "./Offers";
import ProdutsCard from "./ProductsCard";

function MainDetails({ filteredProducts, isFiltered, selectedSection }) {
  if (filteredProducts.length === 0) {
    if (selectedSection) {
      return (
        <>
          <ProdutsCard
            filteredProducts={filteredProducts}
            isFiltered={isFiltered}
            selectedSection={selectedSection}
          />
          <Offers />
        </>
      );
    }
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
        selectedSection={selectedSection}
      />
      <Offers />
    </>
  );
}
export default MainDetails;
