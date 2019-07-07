

export const boardPresenter = {
    timer: null,
    boardModel: null,
    boardView: null,
    n: 1,
    m: 1,
    isRunning: false,
    speed: 2000,

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
                this.isRunning = true;
                this.timer = setInterval(boardModel.performStep.bind(boardModel), this.speed);
            }
        });
        boardView.addSpeedChangeListener((newSpeed) => {
            this.speed = 2000 * (parseInt(newSpeed) / 100);
            if (this.isRunning) {
                clearInterval(this.timer);
                this.timer = null;
                this.timer = setInterval(boardModel.performStep.bind(boardModel), this.speed);
            }
        });
        boardView.addDensityChangeListener((newDensity) => {
            boardModel.setDensity(newDensity)
        });
        boardView.addStopListener(() => {
            this.isRunning = false;
            clearInterval(this.timer);
            this.timer = null;
        });
        boardView.addCreateListener(() => {
            this.isRunning = false;
            clearInterval(this.timer);
            this.timer = null;
            this.createBoard(n, m);
        });
    },

    createBoard() {
        this.boardModel.createBoard(this.n, this.m);
        const { board } = this.boardModel;
        this.boardView.renderBoard(board, this.n, this.m);
    }
};
