const theFilter = require("../input");

describe("validate the input field", () => {
    test("check if name is empty", () => {
        expect(theFilter()).toBe("unknown");
    });

    test("check for space(star + end", () => {
        expect(theFilter("osama")).toBe("osama");
    });

    test("check if name lenght > 10", () => {
        expect(theFilter("osama_mohamed_elsayed")).toBe("osama_moha");
    });

    test("check if name not start with underscore ", () => {
        expect(theFilter("_osama")).toBe("osama");
    })
})