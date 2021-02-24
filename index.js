const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];


const buildTeamMenu = () => {
    return inquirer.prompt([

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
    ]).then((answers) => {
        switch (answers.buildTeamMenu) {
            case 'Engineer':
                inqEngineer();
                break;
            case 'Intern':
                inqIntern();
                break;
            case 'All positions are filled, no need to add anymore': // no break needed at the end of switch/case statement 
        }
    })
}

// Building questions for each role being added

function inqEngineer() {
    return inquirer.prompt([
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
            `${answers.engingeerGithub}`,
        );
    });
}

function inqIntern () {
    return inquirer.prompt([
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
    I      `${answers.internName}`,
            `${answers.internId}`,
            `${answers.internEmail}`,
            `${answers.internGithub}`,
        );
    });
}