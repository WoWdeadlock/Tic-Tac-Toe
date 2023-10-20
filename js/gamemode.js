export default class Gamemode {

    constructor(player1, player2, gameboard) {

        this.player1 = player1;
        this.player2 = player2;

        this.gameboard = gameboard;

        // 1 is O, 2 is X

        this.player1.setValue(Math.floor(Math.random() * 2) + 1);

        if (this.player1.side == 1) {

            this.player2.side = 2;
        
        } else {

            this.player2.side = 1;

        }

    }
     
    start() {

        this.gameboard.draw();

    }

};
