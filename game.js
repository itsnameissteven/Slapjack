class Game {
    constructor() {
        this.player1 = new Player('Player 1')
        this.player2 = new Player('Player 2')
        this.deckOfCards = [ {color:"blue", value:"01"}, {color:"blue", value:"02"}, {color:"blue", value:"03"}, {color:"blue", value:"04"}, {color:"blue", value:"05"}, {color:"blue", value:"06"}, {color:"blue", value:"07"}, {color:"blue", value:"08"}, {color:"blue", value:"09"}, {color:"blue", value:"10"}, {color:"blue", value:"jack"}, {color:"blue", value:"queen"}, {color:"blue", value:"king"}, {color:"green", value:"01"}, {color:"green", value:"02"}, {color:"green", value:"03"}, {color:"green", value:"04"}, {color:"green", value:"05"}, {color:"green", value:"06"}, {color:"green", value:"07"}, {color:"green", value:"08"}, {color:"green", value:"09"}, {color:"green", value:"10"}, {color:"green", value:"jack"}, {color:"green", value:"queen"}, {color:"green", value:"king"}, {color:"red", value:"01"}, {color:"red", value:"02"}, {color:"red", value:"03"}, {color:"red", value:"04"}, {color:"red", value:"05"}, {color:"red", value:"06"}, {color:"red", value:"07"}, {color:"red", value:"08"}, {color:"red", value:"09"}, {color:"red", value:"10"}, {color:"red", value:"jack"}, {color:"red", value:"queen"}, {color:"red", value:"king"}, {color:"gold", value:"01"}, {color:"gold", value:"02"}, {color:"gold", value:"03"}, {color:"gold", value:"04"}, {color:"gold", value:"05"}, {color:"gold", value:"06"}, {color:"gold", value:"07"}, {color:"gold", value:"08"}, {color:"gold", value:"09"}, {color:"gold", value:"10"}, {color:"gold", value:"jack"}, {color:"gold", value:"queen"}, {color:"gold", value:"king"}
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