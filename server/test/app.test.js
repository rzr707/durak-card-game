const { add } = require("../src/app");

describe("add", () => {
    it("should add two numbers", () => {
        expect(add(3, 5)).toBe(8);
    });
});
