class Card {
  constructor(isWinningCard) {
    this.node = document.createElement("button");
    this.node.style.height = "200px";
    this.node.style.width = "100px";
    this.node.innerText = "두근두근";

    this.isWinningCard = isWinningCard;

    this.handleCardClick();
  }

  selectCard() {
    if (this.isWinningCard) {
      document.querySelector("#contents").innerText = "당첨입니다 :D";
    }
    document.querySelector("#contents").innerText = "꽝입니다!";
  }

  handleCardClick() {
    this.node.addEventListener("click", () => {
      this.selectCard();
    });
  }
}

class Cards {
  constructor(count) {
    this.createCards(count);
    this.shuffle();
  }

  createCards(count) {
    if (count < 2) alert("하나 이상의 카드를 입력해주세요.");

    this.cardList = new Array(count - 1).fill(0).map(() => new Card(false));
    this.cardList.push(new Card(true));
  }
  shuffle() {
    this.cardList.sort(() => Math.random() - 0.5);
  }
}

const cards = new Cards(5);

cards.cardList.forEach((card) => {
  document.querySelector("#contents").appendChild(card.node);
});
