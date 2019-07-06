export default class ModelBoard {

    createBoard(n, m) {
        for (let i = 0; i < n; i++) {
            const newRow = document.createElement('tr');
            board.appendChild(newRow);
            for (let j = 0; j < m; j++) {
                const newCell = document.createElement('td');
                newRow.appendChild(newCell);
            }
        }
    }

    randomCellsOnBoard(threshold) {
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


console.log("hello hi!");