import Gameboard from "./gameboard.js"
import Gamemode from "./gamemode.js";
import {Player} from "./player.js"

let player1 = Player("One");
let player2 = Player("Two");

let shelf = document.querySelector(".gameboard");

let gameboard = new Gameboard(shelf);

let gamemode = new Gamemode(player1, player2, gameboard);
gamemode.start();