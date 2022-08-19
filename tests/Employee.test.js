// Defines a const Employee that requires the Employee.js in the library folder
const Employee = require("../library/Employee.js");

// Describes a test setName
describe("setName", () => {
    // This test should set a name
    it("should set a name from the text input", () => {
        // Defines a const e as a new Employee with Lissy, 1, and lissygantos@gmail.com as paramaters
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        // Expect e name to be Lissy
        expect(e.name).toBe("Lissy");
    });
});

// Describes a test setID
describe("setID", () => {
    // This test should set an ID
    it("should set an ID from the text input", () => {
        // Defines a const e as a new Employee with Lissy, 1, and lissygantos@gmail.com as paramaters
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        // Expect e id to be 1
        expect(e.id).toBe(1);
    });
});

// Describes a test setEmail
describe("setEmail", () => {
    // This test should set an email
    it("should set an email from the text input", () => {
        // Defines a const e as a new Employee with Lissy, 1, and lissygantos@gmail.com as paramaters
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        // Expect e email to be lissygantos@gmail.com
        expect(e.email).toBe("lissygantos@gmail.com");
    });
})

// Describes a test getName
describe("getName", () => {
    // This test should get a name
    it("should get the user's inputted name", () => {
        // Defines a const e as a new Employee with Matt, 44, mattsmith@gmail.com as parameters
        const e = new Employee("Matt", 44, "mattsmith@gmail.com");
        // Expect e.getName() to be Matt
        expect(e.getName()).toBe("Matt");
    })
})

// Describes a test getID
describe("getID", () => {
    // This test should get an ID
    it("should get the user's inputted ID", () => {
        // Defines a const e as a new Employee with Matt, 44, and mattsmith@gmail.com as paramaters
        const e = new Employee("Matt", 44, "mattsmith@gmail.com");
        // Expect e.getID() to be 44
        expect(e.getID()).toBe(44);
    })
})

// Describes a test getEmail
describe("getEmail", () => {
    // This test should get an email
    it("should get the user's inputted email", () => {
        // Defines a const e as a new Employee with Matt, 44, and mattsmith@gmail.com as paramaters
        const e = new Employee("Matt", 44, "mattsmith@gmail.com");
        // Expect e.getEmail() to be mattsmith@gmail.com
        expect(e.getEmail()).toBe("mattsmith@gmail.com");
    })
})

// Describes a test getRole
describe("getRole", () => {
    // This test should get a role
    it("gets the role from the selected role list", () => {
        // Defines a const e as a new Employee with Lissy, 1, and lissygantos@gmail.com as paramaters
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        // Expect e.getRole() to be employee
        expect(e.getRole()).toBe("Employee");
    });
})
