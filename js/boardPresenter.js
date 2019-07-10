

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

        boardModel.addBoardCreatedListener((newBoard) => {
            boardView.createBoard(newBoard, this.n, this.m);
        });

        boardModel.addBoardChangeListener((newBoard) => {
            boardView.changeBoard(newBoard, this.n, this.m);
        });




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
        boardView.addCreateListener((userN, userM) => {
            this.isRunning = false;
            clearInterval(this.timer);
            this.timer = null;

            this.n = userN;
            this.m = userM;
            this.createBoard(userN, userM);
        });
        boardView.addCellClickedListener((i, j) => {
            boardModel.toggleCell(i, j);
        });


        this.createBoard(n, m);

    },

    createBoard() {
        this.boardModel.createBoard(this.n, this.m);
    }
};
