const Manager = require("../library/Manager.js");

describe("setOfficeNumber", () => {
    it("sets the office number from the text input", () => {
        const m = new Manager("Delilah", 230, "delilah@gmail.com", 211);
        expect(m.officeNumber).toBe(211);
    })
})

describe("getOfficeNumber", () => {
    it("gets the inputted office number", () => {
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
