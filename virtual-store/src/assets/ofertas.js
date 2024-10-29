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
  "public/CODIGO PENAL.webp",
  "./details.html"
);
const offer2 = new Offers(
  "3",
  "Código Civil Tapa Dura",
  "S/. 75",
  "Incluye IGV",
  "public/CODIGO CIVIL.webp",
  "./details.html"
);

const offer3 = new Offers(
  "7",
  "El Defensor 2",
  "S/. 60",
  "Incluye IGV",
  "public/EL DEFENSOR 2 - VIVIENDO EL SUEÑO.webp",
  "./details.html"
);

/*Arrays*/

const arrayOfers = [offer1, offer2, offer3];

export default arrayOfers;
