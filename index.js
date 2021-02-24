const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee'); // might not need this? 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamEmployed = [];


const buildTeamMenu = () => {
     inquirer.prompt([

        {
            type: 'list',
            name: 'teamAdd',
            message: 'What position will we be adding to the team today?',
            choices: [
                'Engineer',
                'Intern',
                'All positions are filled, no need to add anymore'
            ]

        }
    ])
    .then((answers) => {
        switch (answers.teamAdd) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'All positions are filled, no need to add anymore': // no break needed at the end of switch/case statement 
        }
    });
}
// Manager questions first before employee prompts 


inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the Manager name?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the Manager Id'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the Manager email?'
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'What is the Managers office number?'
    }
])
    .then((answers) => {
        const manager = new Manager(
            `${answers.managerName}`,
            `${answers.managerId}`,
            `${answers.managerEmail}`,
            `${answers.managerOfficeNum}`,
        );
        teamEmployed.push(manager);
        buildTeamMenu()
    });



// Building questions for each role being added

function promptEngineer() {
     inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the Engineers Id'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the Engineers email?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the Engineers Github user name?'
        }
    ])
        .then((answers) => {
            const engineer = new Engineer(
                `${answers.engineerName}`,
                `${answers.engineerId}`,
                `${answers.engineerEmail}`,
                `${answers.engineerGithub}`,
            );
            teamEmployed.push(engineer)
            buildTeamMenu()
        });
}

function promptIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the Interns Id'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the Interns email?'
        },
        {
            type: 'input',
            name: 'internGithub',
            message: 'What is the Interns Github user name?'
        }
    ])
        .then((answers) => {
            const intern = new Intern(
                `${answers.internName}`,
                `${answers.internId}`,
                `${answers.internEmail}`,
                `${answers.internGithub}`,
            );
            teamEmployed.push(intern);
            buildTeamMenu()
        });
}