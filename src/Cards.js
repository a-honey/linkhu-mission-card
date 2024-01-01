const { default: Card } = require("./Card");

class Cards {
  constructor(count) {
    this.cardList = [];
    this.createCards(count);
    this.shuffle();
  }

  createCards(count) {
    if (count < 2) {
      alert("하나 이상의 카드를 입력해주세요.");
      return;
    }

    this.cardList = Array.from(
      { length: count - 1 },
      (_, index) => new Card(false, index, () => this.resetGame(), this)
    );
    this.cardList.push(new Card(true, count - 1, () => this.resetGame(), this));
  }

  shuffle() {
    this.cardList = this.cardList.sort(() => Math.random() - 0.5);
  }

  resetGame() {
    this.createCards(this.cardList.length);
    const contentsElement = document.querySelector("#contents");

    contentsElement.innerHTML = "";
    this.cardList.forEach((card) => {
      contentsElement.appendChild(card.node);
    });
  }
}

export default Cards;
