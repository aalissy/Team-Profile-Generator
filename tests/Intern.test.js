// Defines a const Intern that requires the Intern.js in the library folder
const Intern = require("../library/Intern.js");

// Describes a test setSchool
describe("setSchool", () => {
    // This test should set the school
    it("sets the school from the text input", () => {
        // Defines a const i as a new Intern with Jane, 4, janey@gmail.com, and Loyola University of Chicago as parameters
        const i = new Intern("Jane", 4, "janey@gmail.com", "Loyola University of Chicago");
        // Expect i school to be Loyola University of Chicago
        expect(i.school).toBe("Loyola University of Chicago");
    });
});

// Describes a test getSchool
describe("getSchool", () => {
    // This test should get the school
    it("gets the inputted school", () => {
        // Defines a const i as a new Intern with Lewis, 210, lewis@gmail.com, and University of Chicago as parameters
        const i = new Intern("Lewis", 210, "lewis@gmail.com", "University of Chicago");
        // Expect i.getSchool() to be University of Chicago
        expect(i.getSchool()).toBe("University of Chicago");
    })
})

// Describes a test getRole
describe("getRole", () => {
    // This test should get a role
    it("gets the role from the selected role list", () => {
        // Defines a const i as a new Intern with Jane, 4, janey@gmail.com, and Loyola University of Chicago as parameters
        const i = new Intern("Jane", 4, "janey@gmail.com", "Loyola University of Chicago");
        // Eexpect i.getRole() to be intern
        expect(i.getRole()).toBe("Intern");
    });
})
