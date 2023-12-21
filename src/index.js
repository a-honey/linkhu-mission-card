class Card {
  constructor(isWinningCard) {
    this.node = this.createCardElement();
    this.isWinningCard = isWinningCard;
    this.handleCardClick();
  }

  createCardElement() {
    const button = document.createElement("button");
    button.style.height = "200px";
    button.style.width = "100px";
    button.innerText = "두근두근";
    return button;
  }

  selectCard() {
    const contents = document.querySelector("#contents");
    contents.innerText = this.isWinningCard ? "당첨입니다 :D" : "꽝입니다!";
  }

  handleCardClick() {
    this.node.addEventListener("click", () => {
      this.selectCard();
    });
  }
}

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

    this.cardList = Array.from({ length: count - 1 }, () => new Card(false));
    this.cardList.push(new Card(true));
  }

  shuffle() {
    this.cardList.sort(() => Math.random() - 0.5);
  }
}

const cards = new Cards(5);

const contentsElement = document.querySelector("#contents");
cards.cardList.forEach((card) => {
  contentsElement.appendChild(card.node);
});
