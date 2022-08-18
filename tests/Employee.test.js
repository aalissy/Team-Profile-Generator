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

describe("getRole", () => {
    it("gets the role from the selected role list", () => {
    const e = new Employee("Lissy", 1, "lissygantos@gmail.com");
    expect(e.getRole()).toBe("Employee");
    });
})
