// Defines a class Employee
class Employee {
    // Constructor with name, id, and email as paramaters
    constructor(name, id, email) {
        // Sets this.name equal to name
        this.name = name;
        // Sets this.id equal to id
        this.id = id;
        // Sets this.email equal to email
        this.email = email;
    }
    // Defines a function getName()
    getName() {
        // Return this.name
        return this.name;
    };
    // Defines a function getID()
    getID() {
        // Return this.id
        return this.id;
    };
    // Defines a function getEmail()
    getEmail() {
        // Return this.email
        return this.email;
    };
    // Defines a function getRole()
    getRole() {
        // Returns Employee
        return "Employee";
    };
};

// Exports Employee
module.exports = Employee;
