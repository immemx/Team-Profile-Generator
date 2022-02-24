const inquirer = require('inquirer');

const app = {

    initalizeApp: function() {
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
                name: 'office-number',
                message: 'What is the managers office number?',
            },
        ])
    };
}

app.initalizeApp()