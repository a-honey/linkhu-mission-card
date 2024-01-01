import Card from "./Card";

class Cards {
  cardList: Card[];

  constructor(count: number) {
    this.cardList = [];
    this.createCards(count);
    this.shuffle();
  }

  private createCards(count: number): void {
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

  private shuffle(): void {
    this.cardList = this.cardList.sort(() => Math.random() - 0.5);
  }

  resetGame(): void {
    this.createCards(this.cardList.length);
    const contentsElement = document.querySelector("#contents") as HTMLElement;

    contentsElement.innerHTML = "";
    this.cardList.forEach((card) => {
      contentsElement.appendChild(card.getNode());
    });
  }
}

export default Cards;
