export default class Gameboard {

    constructor(shelf) 
    
    {
        this.gameboard = [[0,0,0],[0,0,0],[0,0,0]];
        this.shelf = shelf;
        this.side = 1;
    }

    check(side) 
    
    {

        for (let i = 0; i < 3; i++) {
        // Check rows and columns
            if (
                ([this.gameboard[i][0], this.gameboard[i][1], this.gameboard[i][2]].every(element => element === side)) ||
                ([this.gameboard[0][i], this.gameboard[1][i], this.gameboard[2][i]].every(element => element === side))
            ) {
                console.log("You won!");
                return;
            }
        }
    
        // Check diagonals
        if (
            ([this.gameboard[0][0], this.gameboard[1][1], this.gameboard[2][2]].every(element => element === side)) ||
            ([this.gameboard[2][0], this.gameboard[1][1], this.gameboard[0][2]].every(element => element === side))
        ) {
            console.log("You won!");
        }

    }
    
    draw() 
    
    {

        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 3; j++) {

                let cell = document.createElement("div");
                cell.setAttribute("class", "cell");

                cell.dataset.x = i;
                cell.dataset.y = j;
                cell.dataset.side = 0;

                cell.addEventListener("click", () => {

                    let cellOne = document.createElement("div");
                    cellOne.setAttribute("class", "cell-one");

                    let cellTwoA = document.createElement("div");
                    cellTwoA.setAttribute("class", "cell-two-a");
                    let cellTwoB = document.createElement("div");
                    cellTwoB.setAttribute("class", "cell-two-b");
                    let cellTwo = document.createElement("div");
                    cellTwo.setAttribute("class", "cell-two");
                    cellTwo.appendChild(cellTwoA);
                    cellTwo.appendChild(cellTwoB);

                    if (cell.dataset.side == 0) {

                        if (this.side == 1) {
        
                            cell.dataset.side = 1;
                            this.gameboard[parseInt(cell.dataset.x)][parseInt(cell.dataset.y)] = 1;
                            this.side = 2;
                            cell.appendChild(cellOne);
                            this.check(1);
        
                        } else {
        
                            cell.dataset.side = 2;
                            this.gameboard[parseInt(cell.dataset.x)][parseInt(cell.dataset.y)] = 2;
                            this.side = 1;
                            cell.appendChild(cellTwo);
                            this.check(2);

                        }
        
                    }

                })

                this.shelf.appendChild(cell);

            }
            
        }

    }

};