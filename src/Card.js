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

export default Card;
