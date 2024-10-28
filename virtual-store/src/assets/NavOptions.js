/*Class*/
class navOption {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }
}
/*Objects*/
const navOption1 = new navOption("Penal", "#");
const navOption2 = new navOption("Civil", "#");
const navOption3 = new navOption("Familia", "#");
const navOption4 = new navOption("Administrativo", "#");
const navOption5 = new navOption("Constitucional", "#");

/*Array*/
const arrayNavOptions = [
  navOption1,
  navOption2,
  navOption3,
  navOption4,
  navOption5,
];

export default arrayNavOptions;
