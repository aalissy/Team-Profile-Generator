const Employee = require("../library/Employee.js");

describe("setName", () => {
    it("should set a name from the text input", () => {
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        expect(e.name).toBe("Lissy");
    });
});

describe("setID", () => {
    it("should set an ID from the text input", () => {
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        expect(e.id).toBe(1);
    });
});

describe("setEmail", () => {
    it("should set an email from the text input", () => {
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        expect(e.email).toBe("lissygantos@gmail.com");
    });
})

describe("getName", () => {
    it("should get the user's inputted name", () => {
        const e = new Employee("Matt", 44, "mattsmith@gmail.com");
        expect(e.getName()).toBe("Matt");
    })
})

describe("getID", () => {
    it("should get the user's inputted ID", () => {
        const e = new Employee("Matt", 44, "mattsmith@gmail.com");
        expect(e.getID()).toBe(44);
    })
})

describe("getEmail", () => {
    it("should get the user's inputted email", () => {
        const e = new Employee("Matt", 44, "mattsmith@gmail.com");
        expect(e.getEmail()).toBe("mattsmith@gmail.com");
    })
})

describe("getRole", () => {
    it("gets the role from the selected role list", () => {
        const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
        expect(e.getRole()).toBe("Employee");
    });
})
