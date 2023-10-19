function Player(name, score) {

    return {
        name: name,
        score: score,
        displayStats() {

            return name + " - " + score;
        }
    }
}

export {Player}