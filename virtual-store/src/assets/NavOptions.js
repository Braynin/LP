/*Class*/
class navOption {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }
}
/*Objects*/
const navOption1 = new navOption("PENAL", "/Penal");
const navOption2 = new navOption("CIVIL", "/Civil");
const navOption3 = new navOption("FAMILIA", "/Familia");
const navOption4 = new navOption("ADMINISTRATIVO", "/Administrativo");
const navOption5 = new navOption("CONSTITUCIONAL", "/Constitucional");

/*Array*/
const arrayNavOptions = [
  navOption1,
  navOption2,
  navOption3,
  navOption4,
  navOption5,
];

export default arrayNavOptions;
