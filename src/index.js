class Card {}

// 실제 실행코드
const cards = new Cards(3);
document.querySelector("#contents").appendChild(cards.deck[0].node);
document.querySelector("#contents").appendChild(cards.deck[1].node);
document.querySelector("#contents").appendChild(cards.deck[2].node);
