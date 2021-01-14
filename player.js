class Player {
    constructor(player) {
        this.id = player
        this.wins = 0
        this.hand = []
    }
    playCard() {
        return this.hand.shift()
    }
}