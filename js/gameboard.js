export default class Gameboard {

    constructor() {
        this.gameboard = [[0,0,0],[0,0,0],[0,0,0]];
    }

    check() {

        // for checking rows

            if ((this.gameboard[0][0] == this.gameboard[0][1] && this.gameboard[0][1] == this.gameboard[0][2])
            || (this.gameboard[1][0] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[1][2])
            || (this.gameboard[2][0] == this.gameboard[2][1] && this.gameboard[2][1] == this.gameboard[2][2])) {

                console.log("You won!");

            }

        // for checking columns
            
            if ((this.gameboard[0][0] == this.gameboard[1][0] && this.gameboard[1][0] == this.gameboard[2][0])
            || (this.gameboard[0][1] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[2][1])
            || (this.gameboard[0][2] == this.gameboard[1][2] && this.gameboard[1][2] == this.gameboard[2][2])) {

                console.log("You won!");

            }

        // for checking top left diagonal

            if (this.gameboard[0][0] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[2][2]) {

                console.log("You won!");

            }


        // for checking bottom right diagonal

        if (this.gameboard[0][2] == this.gameboard[1][1] && this.gameboard[1][1] == this.gameboard[2][0]) {

            console.log("You won!");

        }

    }
    
};