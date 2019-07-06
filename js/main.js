import BoardModel from "./boardModel.js";
import { boardView } from "./boardView.js";


const n = 10;
const m = 15;


const boardModel = new BoardModel();
boardView.renderInitialBoard(null, n, m);

boardModel.createBoard();