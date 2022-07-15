export class Tennis {
    firstPlayerScoreTimes = 0;

    score() {
        let scoreLookup = {
            1: 'fifteen',
            2: 'thirty',
        }
        if (this.firstPlayerScoreTimes === 2 || this.firstPlayerScoreTimes === 1) {
            return `${scoreLookup[this.firstPlayerScoreTimes]} love`;
        }
        return 'love all';
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++;
    }
}
