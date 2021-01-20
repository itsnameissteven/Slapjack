class Card {
  constructor() {
    this.suits = ["blue", "red", "green", "gold"];
    this.values = ["ace", "02", "03", "04", "05", "06", "07", "08", "09", "10", "jack", "queen", "king"];
  }; 

  buildCompleteDeck() {
    var suitsIndex = 0;
    var valuesIndex = 0;
    var deck = [];
    for(var i = 0; i < 52; i++) {
      if (valuesIndex === 13) {
        suitsIndex++;
        valuesIndex = 0;
      };
      deck.push({color: this.suits[suitsIndex], value: this.values[valuesIndex]});
      valuesIndex++;
    };

    return deck;
  };
}
