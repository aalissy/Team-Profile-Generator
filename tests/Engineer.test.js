const Engineer = require("../library/Engineer.js");

describe("setGithub", () => {
    it("sets the github from the text input", () => {
        const e = new Engineer("John", 3, "john@gmail.com", "johnson");
        expect(e.github).toBe("johnson");
    });
})

describe("getGithub", () => {
    it("gets the inputted github", () => {
        const e = new Engineer("Janna", 33, "janna@gmail.com", "paulson");
        expect(e.getGithub()).toBe("paulson");
    })
})

describe("getRole", () => {
    it("gets the role from the selected role list", () => {
        const e = new Engineer("John", 3, "john@gmail.com", "johnson");
        expect(e.getRole()).toBe("Engineer");
    });
})
