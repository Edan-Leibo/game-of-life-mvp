export const boardPresenter = {
    init(n, m, boardModel, boardView) {
        boardModel.createBoard(n, m);
        const { board } = boardModel;
        boardView.renderBoard(board, n, m);

        boardModel.addBoardChangeListener((newBoard) => boardView.renderBoard(newBoard, n, m));

        boardView.addStepListener(() => {
            console.log("dfosfndsf");
            boardModel.performStep()
        });

    }
};
