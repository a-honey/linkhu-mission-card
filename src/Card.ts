class Card {
  private node: HTMLButtonElement;

  constructor(
    private isWinningCard: boolean,
    private position: number,
    private resetCallback: () => void,
    private cardsInstance: Cards
  ) {
    this.node = this.createCardElement("두근두근");
    this.handleCardClick();
  }

  getNode(): HTMLButtonElement {
    return this.node;
  }

  private createCardElement(text: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.style.height = "200px";
    button.style.width = "100px";
    button.innerText = text;
    return button;
  }

  private selectCard(): void {
    const contents = document.querySelector("#contents") as HTMLElement;
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

  private handleCardClick(): void {
    this.node.addEventListener("click", () => {
      this.selectCard();
    });
  }
}

interface Cards {
  cardList: Card[];
}

export default Card;
