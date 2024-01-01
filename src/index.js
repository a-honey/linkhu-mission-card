const { default: Cards } = require("./Cards");

const cards = new Cards(5);

const contentsElement = document.querySelector("#contents");
cards.cardList.forEach((card) => {
  contentsElement.appendChild(card.node);
});
