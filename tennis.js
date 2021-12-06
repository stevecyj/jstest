export class Tennis {
    firstPlayerScoreTimes = 0;

    score() {
        if (this.firstPlayerScoreTimes === 1) {
            return 'fifteen love';
        }
        return 'love all';
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++;
    }
}