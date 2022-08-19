// Defines a const Manager that requires the Manager.js in the library folder
const Manager = require("../library/Manager.js");

// Describes a test setOfficeNumber
describe("setOfficeNumber", () => {
    // This test should set the office number
    it("sets the office number from the text input", () => {
        // Defines a const m as a new Manager with Delilah, 230, delilah@gmail.com, and 211 as parameters
        const m = new Manager("Delilah", 230, "delilah@gmail.com", 211);
        // Expect m officeNumber to be 211
        expect(m.officeNumber).toBe(211);
    })
})

// Describes a test getOfficeNumber
describe("getOfficeNumber", () => {
    // This test should get the office number
    it("gets the inputted office number", () => {
        // Defines a const m as a new Manager with Lily, 2, lily@gmail.com, and 44 as parameters
        const m = new Manager("Lily", 2, "lily@gmail.com", 44);
        // Expect m.getOfficeNumber() to be 44
        expect(m.getOfficeNumber()).toBe(44);
    });
});

// Describes a test getRole
describe("getRole", () => {
    // This test should get a role
    it("gets the role from the selected role list", () => {
        // Defines a const m as a new Manager with Lily, 2, lily@gmail.com, and 44 as parameters
        const m = new Manager("Lily", 2, "lily@gmail.com", 44);
        // Expect m.getRole() to be manager
        expect(m.getRole()).toBe("Manager");
    });
});
