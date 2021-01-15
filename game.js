class Game {
    constructor() {
        this.player1 = new Player('Player 1', true);
        this.player2 = new Player('Player 2');
        this.deckOfCards = this.buildDeck();
        this.slapIsLegal = false
    };
    buildDeck() {
        var suits = ["blue", "red", "green", "gold"];
        var values = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "jack", "queen", "king"];
        var suitsNumber = 0;
        var valuesNumber = 0;
        var deck = [];
        for(var i = 0; i < 52; i++){
            if (valuesNumber === 13) {
                suitsNumber++;
                valuesNumber = 0;
            };
            deck.push({color: suits[suitsNumber], value: values[valuesNumber]});
            valuesNumber++;
        }
        return deck;
    };

    shuffle(deck) {
        var randomNumber;
        var temp;
        for (var i = deck.length - 1; i > 0; i--) { 
            randomNumber = Math.floor(Math.random() * (i + 1));
            temp = deck[i];
            deck[i] = deck[randomNumber];
            deck[randomNumber] = temp;
        }
        return deck;
    };

    trackCards() {
        if((this.deckOfCards[0].value === "jack") || (this.deckOfCards[0].value === this.deckOfCards[1].value) || (this.deckOfCards[0].value === this.deckOfCards[2].value)) {
          this.slapIsLegal = true
        } else {
            this.slapIsLegal = false 
        }
    }

    dealCards() {
        this.shuffle(this.deckOfCards)
        this.player1.hand = this.deckOfCards.splice(0, 26)
        this.player2.hand = this.deckOfCards.splice(0, 26)
        }
    trackPlayerTurn() {
        this.player1.hasNextTurn = !this.player1.hasNextTurn
        this.player2.hasNextTurn = !this.player2.hasNextTurn
    }
    slapCards(player) {
        this.trackCards()
        if (this.slapIsLegal) {
            player.hand = player.hand.concat(this.deckOfCards.splice(0, this.deckOfCards.length))
            this.shuffle(player.hand)
        } else {
            this.penalize(player)
        }
    }
    penalize(player) {
        if(player === this.player1){
            this.player2.hand.push(this.player1.hand.shift())
        } else{
            this.player1.hand.push(this.player2.hand.shift())
        }
    }
    updateWinCount() {
        //add to win count
    }
    resetDeck() {
        /// reshuffle deck and deal  
    }

}