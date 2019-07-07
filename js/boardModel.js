


export default class ModelBoard {

    constructor() {
        this.density = 30;
        this.board = [];
    }

    createBoard(n, m) {
        for (let i = 0; i < n; i++) {
            this.board[i] = [];
            for (let j = 0; j < m; j++) {
                this.board[i][j] = Math.floor(Math.random() * 101) > this.density ? false : true;
            }
        }
    }

    setDensity(newDensity) {
        this.density = newDensity;
    }

    toggleCell(i, j) {
        this.board[i][j] = !this.board[i][j];
    }


    performStep() {
        let futureBoard = [];

        for (let x = 0; x < this.board.length; x++) {
            futureBoard[x] = [];
            for (let y = 0; y < this.board[x].length; y++) {
                let numOfNighbours = 0;
                for (var dx = -1; dx <= 1; dx++) {
                    for (var dy = -1; dy <= 1; dy++) {
                        if (dx == 0 && dy == 0) continue;
                        else if (typeof this.board[x + dx] !== 'undefined'
                            && typeof this.board[x + dx][y + dy] !== 'undefined'
                            && this.board[x + dx][y + dy]) {
                            numOfNighbours++;
                        }
                    }
                }
                let current = this.board[x][y];
                switch (numOfNighbours) {
                    case 0:
                    case 1:
                        current = false;
                        break;
                    case 2:
                        break;
                    case 3:
                        current = true;
                        break;
                    default:
                        current = false;
                }
                futureBoard[x][y] = current;
            }
        }
        this.board = futureBoard;
        this.onBoardChangeCallback(this.board);
    }

    addBoardChangeListener(callback) {
        this.onBoardChangeCallback = callback;
    }

}


