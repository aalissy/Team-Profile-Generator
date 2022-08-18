const Manager = require("../library/Manager.js");

describe("getOfficeNumber", () => {
    it("gets the office number", () => {
        const m = new Manager("Lily", 2, "lily@gmail.com", 44);
        expect(m.getOfficeNumber()).toBe(44);
    });
});

describe("getRole", () => {
    it("gets the role from the selected role list", () => {
        const m = new Manager("Lily", 2, "lily@gmail.com", 44);
        expect(m.getRole()).toBe("Manager");
    });
});