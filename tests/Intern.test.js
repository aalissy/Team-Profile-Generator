const Intern = require("../library/Intern.js");

describe("setSchool", () => {
    it("sets the school from the text input", () => {
        const i = new Intern("Jane", 4, "janey@gmail.com", "Loyola University of Chicago");
        expect(i.school).toBe("Loyola University of Chicago");
    });
});

describe("getSchool", () => {
    it("gets the inputted school", () => {
        const i = new Intern("Lewis", 210, "lewis@gmail.com", "University of Chicago");
        expect(i.getSchool()).toBe("University of Chicago");
    })
})

describe("getRole", () => {
    it("gets the role from the selected role list", () => {
        const i = new Intern("Jane", 4, "janey@gmail.com", "Loyola University of Chicago");
        expect(i.getRole()).toBe("Intern");
    });
})
