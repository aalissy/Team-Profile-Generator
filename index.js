const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./library/Manager.js");
const Engineer = require("./library/Engineer.js");
const Intern = require("./library/Intern.js");
const HTMLgenerator = require("./src/HTMLgenerator.js");
const team = [];

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
    .then(data => {
        const m = new Manager(data.name, data.id, data.email, data.office);
        team.push(m);
        addNextEmployee();
    });
};

function addNextEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Would you like to add another team member?",
            choices: ["Intern", "Engineer", "No more employees"],
        }
    ])
    .then(data => {
        if(data.addNextEmployee === "Intern") {
            createIntern();
        } else if (data.addNextEmployee === "Engineer") {
            createEngineer();
        } else {
            const finished = HTMLgenerator(team);
            fs.writeFile("./dist/index.html", finished, (err) => {
                err ? console.error(err) : console.log("Employees list created!");
            });
        };
    });
};

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
    .then(data => {
        const i = new Intern(data.name, data.id, data.email, data.school);
        team.push(i);
        addNextEmployee();
    });
};

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
    .then(data => {
        const e = new Engineer(data.name, data.id, data.email, data.github);
        team.push(e);
        addNextEmployee();
    })
}

createManager();