"use strict";

function calculer() {
  let taille = parseInt(document.querySelector("#taille").value);
  let poids = parseInt(document.querySelector("#poids").value);
  let imc = poids / (taille / 100) ** 2;
  if (isNaN(taille) || isNaN(poids)) {
    alert(`Veuillez entrer des valeurs de taille et de poids`);
  } else {
    document.querySelector(
      "#result"
    ).innerHTML = `Votre IMC est de ${imc.toFixed(2)}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#calculer").addEventListener("click", calculer);
});
