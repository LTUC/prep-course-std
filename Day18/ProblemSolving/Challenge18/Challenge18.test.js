const {
    wordLength,
    wordLetters,
    targetIndex,
} = require("../Challenge/Challenge18");

describe.skip("Challenge17-01", () => {
    test("", () => {
        let test1 = "You can't handle the truth!"
        let test2 = "You're gonna need a bigger boat"

        expect(wordLength(test1)).toStrictEqual(6);
        expect(wordLength(test2)).toStrictEqual(1);
    });
});

describe.skip("Challenge17-02", () => {
    test("Check-Words-Letters", () => {
        expect(wordLetters("dad", "add")).toStrictEqual(true);
        expect(wordLetters("table", "label")).toStrictEqual(false);
        expect(wordLetters("cat", "rat")).toStrictEqual(false);
    });
});

describe.skip("Challenge17-03", () => {
    test("Find-Target-Index", () => {
        expect(targetIndex([1, 3, 5, 6], 5)).toStrictEqual(2);
        expect(targetIndex([1, 3, 5, 6], 2)).toStrictEqual(1);
        expect(targetIndex([1, 3, 5, 6], 7)).toStrictEqual(4);
    });
});
