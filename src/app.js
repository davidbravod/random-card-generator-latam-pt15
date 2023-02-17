/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*window.onload = function() {
  //write your code here
  console.log("Instrucciones de la carta para hacer click y empezar");
};

let switchCardButton = document.querySelector("#switch-card-button");
switchCardButton.addEventListener("click", function() {
  let icons = ["♦", "♥", "♠", "♣"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  let randomValueIndex = Math.floor(Math.random() * values.length);
  let randomIconsIndex = Math.floor(Math.random() * icons.length);

  let suits =
    randomIconsIndex == 0 || randomIconsIndex == 1
      ? "redSymbol"
      : "blackSymbol";

  let cardHTML = `
<div id="card-symbol-top" class="cardSymbol ${suits}">${icons[randomIconsIndex]}</div>
      <div class="card-number">
        <h1>${values[randomValueIndex]}</h1>
      </div>
      <div id="card-symbol-bottom" class="cardSymbol ${suits}">${icons[randomIconsIndex]}</div>
`;

  let cardContainer = document.querySelector("#card");
  cardContainer.innerHTML = cardHTML;
});

*/

window.onload = function() {
  console.log("Preview de la carta y timer");
  generateCard();
  setInterval(generateCard, 5000);
};

function generateCard() {
  let icons = ["♦", "♥", "♠", "♣"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  let randomValueIndex = Math.floor(Math.random() * values.length);
  let randomIconsIndex = Math.floor(Math.random() * icons.length);

  let suits =
    randomIconsIndex == 0 || randomIconsIndex == 1
      ? "redSymbol"
      : "blackSymbol";

  let cardHTML = `
    <div id="card-symbol-top" class="cardSymbol ${suits}">${icons[randomIconsIndex]}</div>
    <div class="card-number">
      <h1>${values[randomValueIndex]}</h1>
    </div>
    <div id="card-symbol-bottom" class="cardSymbol ${suits}">${icons[randomIconsIndex]}</div>
  `;

  let cardContainer = document.querySelector("#card");
  cardContainer.innerHTML = cardHTML;
}

let switchCardButton = document.querySelector("#switch-card-button");
switchCardButton.addEventListener("click", generateCard);
