var elForm =  document.querySelector("#form");
var elInput = document.querySelector(".input-text");
var elUSD =   document.querySelector("#dollar");
var elRUBL =  document.querySelector("#rub");
var elEURO =  document.querySelector("#euro");
var elHeading = document.querySelector(".h1-value");
var elSelect = document.querySelector("#elSelect");
var kursD = 11.140;
var kursE = 10.813;
var kursR = 177.81;
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elSelect.value === "USD") {
    elHeading.textContent = `USD ${(elInput.value / kursD).toFixed(2)}`;
  } else if (elSelect.value === "RUB") {
    elHeading.textContent = `RUB ${(elInput.value / kursR).toFixed(2)}`;
  } else if (elSelect.value === "EURO") {
    elHeading.textContent = `EURO ${(elInput.value / kursE).toFixed(2)}`;
  }
});