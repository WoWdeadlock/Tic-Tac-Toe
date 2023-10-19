import Gameboard from "./gameboard.js"

function Player(name, score) {

    return {
        name: name,
        score: score,
        displayStats() {

            return name + " - " + score;
        }
    }
}

let gameboard = new Gameboard();

gameboard.check();