const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const buildTeamMenu = () => {
    return inquirer.prompt([

        {
            type: 'list',
            name: 'teamAdd',
            message: 'What position will we be adding to the team today?',
            choices: [
                'Engineer',
                'Intern',
                "All positions are filled, no need to add anymore"

            ]

        }
    ])
}
buildTeamMenu(); // make sure it works... does... neat!