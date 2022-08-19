// Defines a const Employee that requires the Employee.js in the library folder
const Employee = require("./Employee.js");

// Defines a class Intern that extends Employee
class Intern extends Employee {
    // Constructor with name, id, email, and school as parameters
    constructor(name, id, email, school) {
        // Super grabbing name, id, and email from employee
        super(name, id, email);
        // Sets this.school equal to school
        this.school = school;
    };
    // Defines a function getSchool()
    getSchool() {
        // Returns this.school
        return this.school;
    };
    // Defines a function getRole()
    getRole() {
        // Returns Intern
        return "Intern";
    };
};

// Exports Intern
module.exports = Intern;
