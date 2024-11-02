/*Class*/
class footerOption {
  constructor(title, option1, option2, option3, option4) {
    this.title = title;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
  }
}

/*Objects*/

const footerOption1 = new footerOption(
  "Servicio al cliente",
  ["Opiniones de clientes", "#"],
  ["Preguntas Frecuentes", "#"],
  ["Cambios y Devoluciones", "#"],
  ["Política de Privacidad", "#"]
);

const footerOption2 = new footerOption(
  "Libros Juridicos",
  ["Libros de Civil", "#"],
  ["Libros de Penal", "#"],
  ["Packs", "#"],
  ["", ""]
);

/*Array*/

const arrayFooterOptions = [footerOption1, footerOption2];

export default arrayFooterOptions;
