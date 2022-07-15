import {Tennis1} from "./tennis-1";

describe('score', function () {
    beforeEach(() => {
        tennis = new Tennis1();
    });
        let tennis = new Tennis1();

    function scoreShouldBe(expected) {
        expect(tennis.score()).toBe(expected);
    }

    it('should be love all', function () {
        scoreShouldBe('love all');
    });
});
