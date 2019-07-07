import BoardModel from "./boardModel.js";
import { boardView } from "./boardView.js";
import { boardPresenter } from "./boardPresenter.js";


const N = 30;
const M = 30;
const boardModel = new BoardModel();

boardPresenter.init(N, M, boardModel, boardView);
