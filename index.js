const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');

const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const personel = []

const initalizeApp = function() {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Team Managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput
        const manager = new Manager(name, id, email, officeNumber)

        personel.push(manager)
    })
};

const addEmployee = function() {

    return inquirer.prompt([
        {
        type: 'list',
        name: 'role',
        message: 'Please Choose this Team members role',
        choices: ['Engineer', 'Intern']
        },
        {
        type: 'input',
        name: 'name',
        message: 'What is the Team members name?',
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the Team members id?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the Team members email?',
        },
        {
        type: 'input',
        name: 'gitHub',
        message: 'What is the Engineers gitHub username?',
        when: (input) => input.role === "Engineer",
        },
        {
        type: 'input',
        name: 'school',
        message: 'What is the Interns school',
        when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addNewMember',
            message: 'Would you like to add anymore Team members?',
            default: false
            },
    ])
    .then(data => {

        const { name, id, email, role, gitHub, school, } = data
        const teamMember = 

        if (role === 'Engineer') {
            teamMember = new Engineer (name, id, email, gitHub)
        } else if (role === "Intern"){
            teamMember = new Intern (name, id, email, school)
        }

        personel.push(teamMember);

        if (addNewMember) {
            return addEmployee(personel);
        } else {
            return personel;
        }

    })
}

initalizeApp()
    .then(addEmployee)
    .then(personel => )