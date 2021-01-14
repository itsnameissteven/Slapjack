class Game {
    constructor() {
        this.player1 = new Player('Player 1')
        this.player2 = new Player('Player 2')
        this.deckOfCards = this.buildDeck()
    }
    buildDeck() {
        var suits = ["blue", "red", "green", "gold"]
        var values = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "jack", "queen", "king"]
        var suitsNumber = 0
        var valuesNumber = 0
        var deck = []
        for(var i = 0; i < 52; i++){
            if (valuesNumber === 13) {
                suitsNumber++
                valuesNumber = 0
            }
            deck.push({color: suits[suitsNumber], value: values[valuesNumber]})
            valuesNumber++
        }
        return deck
    }
    shuffle(deck) {
        var randomNumber;
        //create a random number variable. This will hold the random number we create
        var temp;
        // temp variale to hold the spot of the element
        for (var i = deck.length - 1; i > 0; i--) {
            //start with the last element of the array. since the first element is index 0 we need to subract 
            randomNumber = Math.floor(Math.random() * (i + 1));
            //creates a random number adds one to i since we subtracted from i in the for loop.  i cannot = 0 for the ranom function number to work
            temp = deck[i];
            //assign the last index to this temp holder
            deck[i] = deck[randomNumber];
            //reassign the last index to the random index
            deck[randomNumber] = temp;
            // reassignt the now empty index to what used to be the last
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
        //removes half the deck to give to each player
        // hand1 = array 0 -4
        //hand2 = array 5-9
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