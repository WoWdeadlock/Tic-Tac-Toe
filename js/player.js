export let Player = function(name) {

    let player = {};

    player.name = name;
    player.score = 0;
    player.side = 0;

    player.displayStats = function () {

        return (

            "Name - " + name + ", Score - " + player.score

        );
    };

    player.setValue = function (value) {

        player.side = value;

    };

    return player;

};

