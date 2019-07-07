let timer = null;

export const boardPresenter = {
    init(n, m, boardModel, boardView) {
        boardModel.createBoard(n, m);
        const { board } = boardModel;
        boardView.renderBoard(board, n, m);

        boardModel.addBoardChangeListener((newBoard) => boardView.renderBoard(newBoard, n, m));

        boardView.addStepListener(() => boardModel.performStep());
        boardView.addPlayListener(() => {
            if (!timer) {
                timer = setInterval(boardModel.performStep.bind(boardModel), 2000);
            }
        });
        boardView.addStopListener(() => {
            clearInterval(timer);
            timer = null;
        })
    }
};
