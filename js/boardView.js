
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
    const speed = document.querySelector(".control-panel__speed");
    const create = document.querySelector(".create-board-button");
    const density = document.querySelector(".density");
    const nSize = document.querySelector(".nSize");
    const mSize = document.querySelector(".mSize");




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
        addSpeedChangeListener(callback) {
            speed.addEventListener("input", () => callback(speed.value));
        },
        addDensityChangeListener(callback) {
            density.addEventListener("input", () => callback(density.value));
        },
        addCreateListener(callback) {
            create.addEventListener("click", () => {
                const n = parseInt(nSize.value);
                const m = parseInt(mSize.value);
                if ((typeof n == 'number') && (typeof m == 'number')) {
                    if (!(n > 50 || m > 50 || n < 10 || m < 10)) {
                        callback(n, m)
                    }
                }
            }
            );
        },
        addCellClickedListener(callback) {
            board.addEventListener("click", (event) => {
                const { target } = event;
                if (target.tagName === "TD") {
                    const i = target.getAttribute("data-i");
                    const j = target.getAttribute("data-j");
                    callback(i, j);
                    target.classList.toggle(DEAD_CELL_CLASS_NAME);
                    target.classList.toggle(ALIVE_CELL_CLASS_NAME);
                }
            });
        },

        /*
            Renders a new board on the page
            arr - The array to be rendered 
        */
        createBoard(arr, n, m) {
            board.innerHTML = "";
            for (let i = 0; i < n; i++) {
                const newRow = document.createElement('tr');
                board.appendChild(newRow);
                for (let j = 0; j < m; j++) {
                    const newCell = document.createElement('td');
                    newCell.classList.add(CELL_CLASS_NAME);
                    newCell.classList.add(lifeStatus(arr, i, j));
                    newCell.setAttribute('data-i', i);
                    newCell.setAttribute('data-j', j);
                    newRow.appendChild(newCell);
                }
            }
        },
        changeBoard(arr, n, m) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    const currCell = document.querySelector(`td[data-i="${i}"][data-j="${j}"`);
                    currCell.classList.remove(ALIVE_CELL_CLASS_NAME);
                    currCell.classList.remove(DEAD_CELL_CLASS_NAME);

                    currCell.classList.add(CELL_CLASS_NAME);
                    currCell.classList.add(lifeStatus(arr, i, j));
                }
            }
        },
    }
})(); // IIFE

