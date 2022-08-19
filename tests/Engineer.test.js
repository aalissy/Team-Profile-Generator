// Defines a const Engineer that requires the Engineer.js in the library folder
const Engineer = require("../library/Engineer.js");

// Describes a test setGithub
describe("setGithub", () => {
    // This test should set the github
    it("sets the github from the text input", () => {
        // Defines a const e as a new Engineer with John, 3, john@gmail.com, and johnson as parameters
        const e = new Engineer("John", 3, "john@gmail.com", "johnson");
        // Expect e github to be johnson
        expect(e.github).toBe("johnson");
    });
})

// Describes a test getGithub
describe("getGithub", () => {
    // This test should get the github
    it("gets the inputted github", () => {
        // Defines a const e as a new Engineer with Janna, 33, janna@gmail.com and paulson as parameters
        const e = new Engineer("Janna", 33, "janna@gmail.com", "paulson");
        // Expect e.getGit() to be paulson
        expect(e.getGithub()).toBe("paulson");
    })
})

// Describes a test getRole
describe("getRole", () => {
    // This test should get a role
    it("gets the role from the selected role list", () => {
        // Defines a const e as a new Engineer with John, 3, john@gmail.com, and johnson as parameters
        const e = new Engineer("John", 3, "john@gmail.com", "johnson");
        // Expect e.getRole() to be engineer
        expect(e.getRole()).toBe("Engineer");
    });
})
