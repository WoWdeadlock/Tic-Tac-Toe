function Gameboard() {

    const gameboard = [0,0,0,0,0,0,0,0,0];
}

function Player(name, score) {

    return {
        name: name,
        score: score,
        displayStats() {

            return name + " - " + score;
        }
    }
}

