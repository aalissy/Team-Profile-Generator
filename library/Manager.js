// Defines a const Employee that requires the Employee.js in the library folder
const Employee = require("./Employee.js");

// Defines a class Manager that extends Employee
class Manager extends Employee {
    // Constructor with name, id, email, and officeNumber as parameters
    constructor(name, id, email, officeNumber) {
        // Super grabbing name, id, and email from employee
        super(name, id, email);
        // Set this.officeNumber equal to officeNumber
        this.officeNumber = officeNumber;
    };
    // Defines a function getOfficeNumber()
    getOfficeNumber() {
        // Returns this.officeNumber
        return this.officeNumber;
    };
    // Defines a function getRole()
    getRole() {
        // Returns Manager
        return "Manager";
    };
};
// Exports Manager
module.exports = Manager;
