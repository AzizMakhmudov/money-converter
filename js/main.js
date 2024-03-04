let elForm = document.querySelector("#form");
let elInput = document.querySelector(".input-text");
let elUSD = document.querySelector("#dollar");
let elRUBL = document.querySelector("#rub");
let elEURO = document.querySelector("#euro");
let elHeading = document.querySelector(".h1-value");
let elSelect = document.querySelector("#elSelect");
let kursD = 0.00008;
let kursE = 0.000074;
let kursR = 0.0073;
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elSelect.value === "USD") {
    elHeading.textContent = `USD ${elInput.value * kursD.toFixed(6)}`;
  } else if (elSelect.value === "RUB") {
    elHeading.textContent = `RUB ${elInput.value * kursR.toFixed(6)}`;
  } else if (elSelect.value === "EURO") {
    elHeading.textContent = `EURO ${elInput.value * kursE.toFixed(6)}`;
  }
});
