const { Card, Cards } = require("../src/index");

describe("Card", () => {
  test("카드 결과보기 테스트", () => {
    const resetGameMock = jest.fn();
    const card = new Card(true, 0, resetGameMock, null);

    card.selectCard();

    expect(resetGameMock).toHaveBeenCalledTimes(1);
  });
});

describe("Cards", () => {
  test("카드 생성하고 리셋하기 테스트", () => {
    const createCardsMock = jest.spyOn(Cards.prototype, "createCards");
    const renderCardsMock = jest.spyOn(Cards.prototype, "renderCards");

    const cards = new Cards(5);
    cards.resetGame();

    expect(createCardsMock).toHaveBeenCalledTimes(1);
    expect(renderCardsMock).toHaveBeenCalledTimes(1);
  });
});
