const range = document.getElementById("length");
const displayLen = document.getElementById("displayLen");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const symb = document.getElementById("symb");
const num = document.getElementById("num");
const generatePass = document.getElementById("generate");
const passwd = document.getElementById("passwd");
const btnCopy = document.getElementById("btn-copy");
const strongBar = document.getElementById("strong");

const textLower = "abcdefghijklmnopqrstuvwxyz";
const textUpper = textLower.toUpperCase();
const symbol = "\"',.:;!$%&/?¡*+¿#";
const numberText = "0123456789";

const generatorPassword = (text, passLength) => {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += text.charAt(Math.floor(Math.random() * text.length));
  }
  return password;
};

const handleStronBar = (value) => {
  if (parseInt(value) < 8) {
    strongBar.classList.remove("bg-warning");
    strongBar.classList.remove("bg-info");
    strongBar.classList.remove("bg-success");
    strongBar.style.width = "20%";
  } else if (parseInt(value) > 8 && parseInt(value) < 12) {
    strongBar.classList.remove("bg-success");
    strongBar.classList.add("bg-warning");
    strongBar.style.width = "40%";
  } else if (parseInt(value) > 12 && parseInt(value) < 40) {
    strongBar.classList.remove("bg-warning");
    strongBar.classList.remove("bg-info");
    strongBar.classList.add("bg-success");
    strongBar.style.width = "70%";
  } else {
    strongBar.classList.remove("bg-success");
    strongBar.classList.add("bg-info");
    strongBar.style.width = "100%";
  }
};

window.addEventListener("load", () => {
  range.addEventListener("input", () => {
    displayLen.innerText = `Length: ${range.value}`;
    handleStronBar(parseInt(range.value));
  });
  generatePass.addEventListener("click", () => {
    let textTemplatePass = [];
    if (lower.checked) {
      textTemplatePass.push(textLower);
    }
    if (upper.checked) {
      textTemplatePass.push(textUpper);
    }
    if (symb.checked) {
      textTemplatePass.push(symbol);
    }
    if (num.checked) {
      textTemplatePass.push(numberText);
    }
    passwd.innerText = generatorPassword(
      textTemplatePass.join(""),
      parseInt(range.value)
    );
  });
  btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(passwd.innerText);
  });
});
