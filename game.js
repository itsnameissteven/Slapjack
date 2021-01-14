class Game {
    constructor() {
        this.player1 = new Player('Player 1');
        this.player2 = new Player('Player 2');
        this.deckOfCards = this.buildDeck();
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

    trackCardsInPot() {
        //remove the card from players hand

    }
    dealCards() {
        this.shuffle(this.deckOfCards)
        this.player1.hand = this.deckOfCards.splice(0, 26)
        this.player2.hand = this.deckOfCards.splice(0, 26)
        }
    trackPlayerTurn() {
        //will only allow one player to discard at a time.
    }
    slapCards() {
        /// will allow for each player to slap cards 
        //reads if it was illegal
        //evaulates they type of win.
    }
    updateWinCount() {
        //add to win count
    }
    resetDeck() {
        /// reshuffle deck and deal  
    }

}