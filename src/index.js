class Card {
  constructor(isWinningCard, position, resetCallback, cardsInstance) {
    this.node = this.createCardElement("두근두근");
    this.isWinningCard = isWinningCard;
    this.cardsInstance = cardsInstance;
    this.position = position;
    this.handleCardClick();
    this.resetCallback = resetCallback;
  }

  createCardElement(text) {
    const button = document.createElement("button");
    button.style.height = "200px";
    button.style.width = "100px";
    button.innerText = text;
    return button;
  }

  selectCard() {
    const contents = document.querySelector("#contents");
    contents.innerHTML = "";

    this.cardsInstance.cardList.forEach((card, index) => {
      const resultCard = this.createCardElement(
        card.isWinningCard ? "당첨" : "꽝"
      );
      contents.appendChild(resultCard);
    });

    const resetButton = document.createElement("button");
    resetButton.innerText = "다시 하기";
    resetButton.addEventListener("click", () => this.resetCallback());

    contents.appendChild(resetButton);
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

const cards = new Cards(5);

const contentsElement = document.querySelector("#contents");
cards.cardList.forEach((card) => {
  contentsElement.appendChild(card.node);
});
