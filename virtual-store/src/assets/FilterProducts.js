const filterProducts = (products, searchText) => {
  return products.filter((product) =>
    product.nombre
      .normalize("NFD") // Normaliza el texto
      .replace(/[\u0300-\u036f]/g, "") // Elimina las tildes
      .toLowerCase()
      .includes(
        searchText
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
  );
};

export default filterProducts;
