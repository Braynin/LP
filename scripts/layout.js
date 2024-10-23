const navContainer = document.getElementById("nav-container");

class option {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }

  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }
}

const option1 = new Message("Penal", "#");
const option2 = new Message("Civil", "#");
const option3 = new Message("Familia", "#");
const option4 = new Message("Administrativo", "#");

const arrayOptions = [option1, option2, option3, option4];

function createOption(option) {
  return `
<li class="nav-option"><a class="nav-link" href="${option.linkto}">${option.text}</a></li>
`;
}
 function printOptions(arrayOptions) {
  let optionsTemplate = "";
  arrayOptions.forEach((option) => {
    optionsTemplate += createOption(option);
  });

  navContainer.innerHTML = optionsTemplate;
