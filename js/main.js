import BoardModel from "./boardModel.js";
import { boardView } from "./boardView.js";
import { boardPresenter } from "./boardPresenter.js";


const N = 10;
const M = 15;
const boardModel = new BoardModel();

boardPresenter.init(N, M, boardModel, boardView);
