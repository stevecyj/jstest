import {Tennis} from "./tennis";

describe('score', function () {
    beforeEach(() => {
        tennis = new Tennis();
    });
    let tennis = new Tennis();

    function scoreShouldBe(expected) {
        expect(tennis.score()).toBe(expected);
    }

    it('should be love all', function () {
        scoreShouldBe('love all');
    });

    it('should be fifteen love', function () {
        tennis.firstPlayerScore();
        scoreShouldBe('fifteen love');
    });

    it('should be thirty love', function () {
        tennis.firstPlayerScore();
        scoreShouldBe('fifteen love');
    });



});