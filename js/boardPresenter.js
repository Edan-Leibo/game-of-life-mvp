

export const boardPresenter = {
    timer: null,
    boardModel: null,
    boardView: null,
    n: 1,
    m: 1,
    init(n, m, boardModel, boardView) {
        this.boardModel = boardModel;
        this.boardView = boardView;
        this.n = n;
        this.m = m;

        this.createBoard(n, m);

        boardModel.addBoardChangeListener((newBoard) => boardView.renderBoard(newBoard, n, m));

        boardView.addStepListener(() => boardModel.performStep());
        boardView.addPlayListener(() => {
            if (!this.timer) {
                this.timer = setInterval(boardModel.performStep.bind(boardModel), 2000);
            }
        });
        boardView.addStopListener(() => {
            clearInterval(this.timer);
            this.timer = null;
        })
        boardView.addCreateListener(() => {
            clearInterval(this.timer);
            this.timer = null;
            this.createBoard(n, m);
        })
    },

    createBoard() {
        this.boardModel.createBoard(this.n, this.m);
        const { board } = this.boardModel;
        this.boardView.renderBoard(board, this.n, this.m);
    }
};
