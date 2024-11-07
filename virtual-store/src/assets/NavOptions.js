/*Class*/
class navOption {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }
}
/*Objects*/
const navOption1 = new navOption("PENAL", "#");
const navOption2 = new navOption("CIVIL", "#");
const navOption3 = new navOption("FAMILIA", "#");
const navOption4 = new navOption("ADMINISTRATIVO", "#");
const navOption5 = new navOption("CONSTITUCIONAL", "#");

/*Array*/
const arrayNavOptions = [
  navOption1,
  navOption2,
  navOption3,
  navOption4,
  navOption5,
];

export default arrayNavOptions;
