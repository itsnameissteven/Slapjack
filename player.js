class Player {
    constructor(player, playsFirst) {
        this.id = player
        this.wins = 0
        this.hand = []
        this.hasNextTurn = playsFirst || false
        this.wonSlap = false
    }
    playCard() {
        return this.hand.shift()
    }
}