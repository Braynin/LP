/*Conteiners*/

ProductsContainer = document.getElementById("products-container");

/*Functions*/

function printProductsContainer(array, creator) {
  return `
  <h2 class="content-subtitle">Libros</h2>
  <div class="products">
       ${template(array, creator)}
   </>
  `;
}

/*Prints*/

ProductsContainer.innerHTML = printProductsContainer(arrayProducts, createCard);
