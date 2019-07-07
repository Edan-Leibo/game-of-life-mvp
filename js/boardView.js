
export const boardView = (function () {

    //Private members
    //Constant Values
    const CELL_CLASS_NAME = "board__cell";
    const ALIVE_CELL_CLASS_NAME = "board__cell--alive";
    const DEAD_CELL_CLASS_NAME = "board__cell--dead";

    //UI Elements
    const board = document.querySelector(".board");
    const step = document.querySelector(".control-panel__step-button");
    const play = document.querySelector(".control-panel__play-button");
    const stop = document.querySelector(".control-panel__stop-button");
    const cells = [];   //2d array containing references to all the cells



    /*  
        Returns a string that describes the status of the cell in a given point.
        arr - The board array
        m,n - The location on the board
    */
    const lifeStatus = (arr, i, j) => arr[i][j] ? ALIVE_CELL_CLASS_NAME : DEAD_CELL_CLASS_NAME;

    //Public Methods

    return {

        addStepListener(callback) {
            step.addEventListener("click", callback);
        },
        addPlayListener(callback) {
            play.addEventListener("click", callback);
        },
        addStopListener(callback) {
            stop.addEventListener("click", callback);
        },

        /*
            Renders a new board on the page
            arr - The array to be rendered 
        */
        renderBoard(arr, n, m) {
            board.innerHTML = "";
            for (let i = 0; i < n; i++) {
                const newRow = document.createElement('tr');
                board.appendChild(newRow);
                cells[i] = [];
                for (let j = 0; j < m; j++) {
                    const newCell = document.createElement('td');
                    newCell.classList.add(CELL_CLASS_NAME);
                    newCell.classList.toggle(lifeStatus(arr, i, j));
                    newRow.appendChild(newCell);
                    cells[i][j] = newCell;
                }
            }
        },
    }
})(); // IIFE

