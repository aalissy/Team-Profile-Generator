// Defines a const fs that requires the File System Module 
const fs = require("fs");
// Defines a const inquirer that requires inquirer
const inquirer = require("inquirer");
// Defines a const Manager that requires the Manager.js in the library folder
const Manager = require("./library/Manager.js");
// Defines a const Engineer that requires the Engineer.js in the library folder
const Engineer = require("./library/Engineer.js");
// Defines a const Intern that requires the Intern.js in the library folder
const Intern = require("./library/Intern.js");
// Defines a const HTMLgenerator that requires the HTMLgenerator.js in the src folder
const HTMLgenerator = require("./src/HTMLgenerator.js");
// Defines a const team that is a blank array
const team = [];

// createManager() function that prompts questions about the manager
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is this manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is this manager's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is this manager's email?",
        },
        {
            type: "input",
            name: "office",
            message: "What is this manager's office number?"
        }
    ])
    // then grab the data
    .then(data => {
        // Defines a const m and creates a new Manager with the name, id, email, and office the user inputted 
        const m = new Manager(data.name, data.id, data.email, data.office);
        // Pushes the new manager to the team array
        team.push(m);
        // Calls the addNextEmployee() function
        addNextEmployee();
    });
};

// addNextEmployee() function that prompts a question asking which new team member they want added
function addNextEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Would you like to add another team member?",
            choices: ["Intern", "Engineer", "No more employees"],
        }
        // Then grab the data
    ]).then(data => {
        // If that new Employee was an intern
        if(data.newEmployee === "Intern") {
            // Then calls the createIntern() function
            createIntern();
            // If that new Employee was an engineer
        } else if (data.newEmployee === "Engineer") {
            // Then calls the createEngineer() function
            createEngineer();
            // If No more employees selected
        } else if(data.newEmployee === "No more employees") {
            // defines a const finished that uses the HTMLgenerator function taking the data in team
            const finished = HTMLgenerator(team);
            // Writes the file index.html to the dist file using the finished data
            fs.writeFile("./dist/index.html", finished, (err) => {
                // If there is an error throw an error otherwise log Employees list created!
                err ? console.error(err) : console.log("Employees list created!");
            });
        };
    });
};

// createIntern() function that prompts questions about the intern
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is this intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is this intern's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is this intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What school does this intern go to?",
        }
    ])
    // Then grabs the data
    .then(data => {
        // Defines a const i and creates a new Intern with the name, id, email, and school the user inputted
        const i = new Intern(data.name, data.id, data.email, data.school);
        // Pushes the new intern to the team array 
        team.push(i);
        // Calls the function addNextEmployee()
        addNextEmployee();
    });
};

// createEngineer() function that prompts questions about the engineer
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is this engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is this engineer's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is this engingeer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is this engineer's github?",
        }
    ])
    // Then grabs the data
    .then(data => {
        // Defines a const e and creates a new engineer with the name, id, email, and github the user inputted
        const e = new Engineer(data.name, data.id, data.email, data.github);
        // Pushes the new engineer to the team array
        team.push(e);
        addNextEmployee();
    })
}
// Calls the createManager() function
createManager();
