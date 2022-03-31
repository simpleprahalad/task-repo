class GameLoader {
    constructor() {
        this.tetrisTimesPlayed = 0;
        this.snakeTimesPlayed = 0;
        this.tetrisHighScore = 0; // what are we using this for ?
        this.snakeHighScore = 0; // what are we using this for ?
    }

    incrementTetrisTimesPlayed = () => {
        this.tetrisTimesPlayed++;
    }

    incrementSnakeTimesPlayed = () => {
        this.snakeTimesPlayed++;
    }
}

let gl = new GameLoader();