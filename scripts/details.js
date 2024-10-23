const query = location.search;
const params = new URLSearchParams(query);
const idQuery = params.get("id");
console.log("ID obtenido de la URL:", idQuery);

function printDetails(id) {
  const product = arrayProducts.find((product) => product.id == id);

  if (!product) {
    console.error("Producto no encontrado");
    return;
  }

  const detailsTemplate = `
        <section class="product-images-block">
            <div class="product-images">
            ${product.imagen
              .map(
                (imagen) =>
                  `<img class="mini-img" src="${imagen}" alt="${product.nombre}" onclick="changeMini(event)" />`
              )
              .join("")}
            </div>
            <img
              class="big-img"
              id="big-img"
              src="${product.imagen[2]}"
              alt="${product.nombre}"
            />
          </section>  
          <div class="product-description-block">
            <h1 class="product-title">${product.nombre}</h1>
            <form class="product-selector">
              <fieldset class="product-fieldset">
                <label class="product-label" for="color">Color</label>
                <select
                  class="product-select"
                  id="color"
                >
                ${product.colors
                  .map((color) => `<option value="${color}">${color}</option>`)
                  .join("")}
                </select>
              </fieldset>
            </form>
            <div class="product-description">
              <span class="product-label">Descripción</span>
              <p>${product.description}</p>
            </div>
          </div>
          <div class="product-checkout-block">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 id="price" class="checkout-total-price">$${product.price}</h2>
              <p class="checkout-description">${product.taxPolicy}</p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"><img src="./assets/truck.png" alt="Truck"/></span>
                  <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
                </li>
                <li>
                  <span class="policy-icon"><img src="./assets/plane.png" alt="Plane"/></span>
                  <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input id="quantity" type="number" min="1" value="1" onchange="changePrice(event)" />
                  <button type="button" class="cart-btn" onclick="saveProduct(${
                    product.id
                  })">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
    `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}

function changeMini(event) {
  const selectedSrc = event.target.src;
  const bigSelector = document.querySelector("#big-img");
  bigSelector.src = selectedSrc;
}

function changePrice(event) {
  const quantity = event.target.value;
  const product = arrayProducts.find((product) => product.id == idQuery);
  const priceSelector = document.querySelector("#price");
  priceSelector.innerHTML = `$${quantity * product.price}`;
}

printDetails(idQuery);

function saveProduct(id) {
  const found = arrayProducts.find((each) => each.id == id);
  const product = {
    id: id,
    title: found.title,
    price: document.getElementById("quantity").value * found.price,
    photos: document.querySelector("#big-img").src,
    color: document.querySelector("#color").value,
    quantity: document.getElementById("quantity").value,
  };

  if (localStorage.getItem("cart") == null) {
    let array = [];
    array.push(product);
    localStorage.setItem("cart", JSON.stringify(array));
  } else {
    let arrayAnterior = JSON.parse(localStorage.getItem("cart"));
    arrayAnterior.push(product);
    localStorage.setItem("cart", JSON.stringify(arrayAnterior));
  }
}
