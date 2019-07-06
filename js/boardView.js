export const boardView = (function () {

    //Private members

    //Constant Values
    const THRESHOLD = 4;
    const CELL_CLASS_NAME = "board__cell";
    const ALIVE_CELL_CLASS_NAME = "board__cell--alive";
    const DEAD_CELL_CLASS_NAME = "board__cell--dead";



    //UI Elements
    const board = document.querySelector(".board");


    /*  
        Returns a string that describes the status of the cell in a given point.
        If no arr is provided the function will return a random value for that point.
    
        arr - The board array
        m,n - The location on the board
    
    */
    const lifeStatus = (arr, i, j) => {
        if (arr) {
            return arr[i][j] ? ALIVE_CELL_CLASS_NAME : DEAD_CELL_CLASS_NAME;
        }
        return Math.floor(Math.random() * 10) > THRESHOLD ? ALIVE_CELL_CLASS_NAME : DEAD_CELL_CLASS_NAME;
    };

    //Public Methods

    return {
        /*
            Renders a new board on the page
            arr (Optional) - The array to be rendered 
        */
        renderInitialBoard(arr, n, m) {
            for (let i = 0; i < n; i++) {
                const newRow = document.createElement('tr');
                board.appendChild(newRow);
                for (let j = 0; j < m; j++) {
                    const newCell = document.createElement('td');
                    newCell.classList.add(CELL_CLASS_NAME);
                    newCell.classList.toggle(lifeStatus(arr, i, j));
                    newRow.appendChild(newCell);
                }
            }
        },

        renderUpdatedBoard(boardArr) {
            for (let i = 0; i < n; i++) {
                const newRow = document.createElement('tr');
                board.appendChild(newRow);
                for (let j = 0; j < m; j++) {
                    const newCell = document.createElement('td');
                    newRow.appendChild(newCell);
                }
            }
        }
    }
})(); // IIFE