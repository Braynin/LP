/*Id Capturer*/

const query = location.search;
const params = new URLSearchParams(query);
const idQuery = params.get("id");

/*Containers*/

const detailsSelector = document.getElementById("details-container");

/* Functions */
function printDetails(id) {
  const product = arrayProducts.find((product) => product.id == id);
  return `
        <section class="product-images-block">
            
            <img
              class="big-img"
              id="big-img"
              src="${product.imagen[0]}"
              alt="${product.nombre}"
            />
          </section>  
          <div class="product-description-block">
            <h1 class="product-title">${product.nombre}</h1>
     
            <div class="product-description">
              <span class="product-label">Descripción</span>
              <p>${product.description}</p>
            </div>
          </div>
          <div class="product-checkout-block">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 id="price" class="checkout-total-price">S/.${product.precioMenor}</h2>
              <p class="checkout-description"></p>
              <ul class="checkout-policy-list">
                <li>
                  <a class="policy-icon" href = "#">
                    <img class = "img-icon" src="./assets/iconPdf.png" alt="Plane"/>
                  </a>
                  
                  <span class="policy-desc">Descarga el índice</span>
                </li>
                <li>
                  <span class="policy-icon" href = "#">
                    <img class = "img-icon" src="./assets/delivery.png" alt="Plane"/>
                  </span>
                  <span class="policy-desc">Recibe aproximadamente entre 3 a 5 días hábiles tu pedido.</span>
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input id="quantity" type="number" min="1" value="1" onchange="changePrice(event)" />
                  <a href="https://wa.me/939613209" class="cart-btn" onclick="saveProduct(${product.id})">
                    Compra aquí
                  </a>

                </div>
              </div>
            </div>
          </div>
    `;
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
  priceSelector.innerHTML = `S/.${quantity * product.precioMenor}`;
}

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

/*Prints*/

detailsSelector.innerHTML = printDetails(idQuery);
