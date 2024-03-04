var elForm =  document.querySelector("#form");
var elInput = document.querySelector(".input-text");
var elUSD =   document.querySelector("#dollar");
var elRUBL =  document.querySelector("#rub");
var elEURO =  document.querySelector("#euro");
var elHeading = document.querySelector(".h1-value");
var elSelect = document.querySelector("#elSelect");
var kursD = 0.000080;
var kursE = 0.000074;
var kursR = 0.0073;
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elSelect.value === "USD") {
    elHeading.textContent = `USD ${(elInput.value * kursD.toFixed(6))}`;
  } else if (elSelect.value === "RUB") {
    elHeading.textContent = `RUB ${(elInput.value * kursR.toFixed(6))}`;
  } else if (elSelect.value === "EURO") {
    elHeading.textContent = `EURO ${(elInput.value * kursE.toFixed(6))}`;
  }
});