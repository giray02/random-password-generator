const number = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const range = document.querySelector("#range");
const passLenght = document.querySelector("#passLenght");
const passResult = document.querySelector("#passResult");
const toolTip = document.querySelector(".tooltip");
const copyBtn = document.querySelector("#copy");
const symbolBox = document.querySelector("#symbol");
const upperBox = document.querySelector("#upper");
const lowerBox = document.querySelector("#lower");
const numberBox = document.querySelector("#number");


const data = {
  upperCase: upperCase,
  lowerCase: lowerCase,
  number: number,
  symbol: "",
};

symbolBox.addEventListener("change", function () {
  if (symbolBox.checked) {
    data.symbol = symbol;
  } else {
    data.symbol = "";
  }
});

upperBox.addEventListener("change", function () {
  if (upperBox.checked) {
    data.upperCase = upperCase;
  } else {
    data.upperCase = "";
  }
});

lowerBox.addEventListener("change", function () {
  if (lowerBox.checked) {
    data.lowerCase = lowerCase;
  } else {
    data.lowerCase = "";
  }
});

numberBox.addEventListener("change", function () {
  if (numberBox.checked) {
    data.number = number;
  } else {
    data.number = "";
  }
});

/* Function to generate random passwords */

let createPassword = (dizi) => {    
  if(data.upperCase == "" && data.lowerCase == "" && data.number == "" && data.symbol == "") 
  {
    passResult.value = "please select an option!";
    passResult.style.color = "#e63946";
  }
  else
  {
    passResult.style.color = "white";
    passResult.value = "";
    passLenght.innerHTML = range.value;
    for (let i = 0; i < range.value; i++) {
      passResult.value += dizi[Math.floor(Math.random() * dizi.length)];
    }
    toolTip.style.display = "none";
  }
};

createPassword(data.number+data.upperCase+data.lowerCase+data.symbol);

/*The process of copying the generated password*/

copyBtn.addEventListener("click", copy);

function copy(){
   passResult.select();
   passResult.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(passResult.value);
  
  toolTip.style.display = "flex";
}

/* Strenght Controllers */

range.addEventListener("input", powerControl);

function powerControl() {
  let status = document.querySelector("#status");

  if (passLenght.innerHTML < 10) {
    status.innerText = "Weak";
    status.style.color = "#e63946";
  } else if (passLenght.innerHTML < 15) {
    status.innerText = "OK.";
    status.style.color = "orange";
  } else if (passLenght.innerHTML >= 15) {
    status.innerText = "Powerful";
    status.style.color = "green";
  }
}
