//TARJETA DE ORFERTAS
class Offers {
  constructor(id, nombre, precio, impuesto, imagen, link) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.impuesto = impuesto;
    this.imagen = imagen;
    this.link = link;
  }

  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }
}
const offer1 = new Offers(
  "1",
  "Código Penal Tapa Dura",
  "S/. 75",
  "Incluye IGV",
  "assets/CODIGO PENAL.webp",
  "./details.html"
);
const offer2 = new Offers(
  "3",
  "Código Civil Tapa Dura",
  "S/. 75",
  "Incluye IGV",
  "assets/CODIGO CIVIL.webp",
  "./details.html"
);

const offer3 = new Offers(
  "7",
  "El Defensor 2",
  "S/. 60",
  "Incluye IGV",
  "assets/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp",
  "./details.html"
);

const arrayOfers = [offer1, offer2, offer3];

function createOffers(offer) {
  return `
    <a class = "product-card" href = "./details.html?id=${offer.id}" >  
    <img class="product-img" src="${offer.imagen}" alt="${offer.nombre}" />
      <div class="product-info">
        <span class="product-title">${offer.nombre}</span>
        <div class="product-price-block">
          <span class="product-price">${offer.precio}</span>
        </div>
        <div class="product-tax-policy">
          <span class="product-discount">${offer.impuesto}</span>
        </div>
      </div>
        </a>
  `;
}
function printOffers(arrayOffers, selector) {
  let offersTemplate = "";

  arrayOffers.forEach((offer) => {
    offersTemplate += createOffers(offer);
  });

  const offersContainer = document.getElementById(selector);
  offersContainer.innerHTML = offersTemplate;
}

printOffers(arrayOfers, "offers-container");
