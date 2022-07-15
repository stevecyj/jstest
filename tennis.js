export class Tennis {
    firstPlayerScoreTimes = 0;

    score() {
        let scoreLookup = {
            1: 'fifteen',
        }
        if (this.firstPlayerScoreTimes === 2) {
            return 'thirty love';
        }
        if (this.firstPlayerScoreTimes === 1) {
            return `${scoreLookup[this.firstPlayerScoreTimes]} love`
        }
        return 'love all';
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++;
    }
}
