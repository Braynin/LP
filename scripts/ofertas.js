/*Conteiners*/

OffersContainer = document.getElementById("offers-container");

/*Classes*/
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

/*Objects*/

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

/*Arrays*/

const arrayOfers = [offer1, offer2, offer3];

/*Functions*/
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

function printOffersContainer(array, creator) {
  return `
  <h2 class="content-subtitle">Ofertas de la semana</h2>
  <div class="offers">
       ${template(array, creator)}
   </>
  `;
}

/*Prints*/

OffersContainer.innerHTML = printOffersContainer(arrayOfers, createOffers);
