// Defines a const Employee that requires the Employee.js in the library folder
const Employee = require("./Employee.js");

// Defines a class Engineeer that extends Employee
class Engineer extends Employee {
    // Constructor with name, id, email, and github as parameters
    constructor (name, id, email, github) {
        // Super grabbing name, id, and email from employee
        super(name, id, email);
        // Sets this.github equal to github
        this.github = github;
    };
    // Defines a function getGithub()
    getGithub() {
        // Returns this.github
        return this.github;
    }
    // Defines a function getRole()
    getRole() {
        // Returns Engineer
        return "Engineer";
    };
};

// Exports Engineer
module.exports = Engineer;
