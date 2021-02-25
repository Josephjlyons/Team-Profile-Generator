const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee'); // might not need this? 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamEmployed = {
    managers: [],
    interns: [],
    engineers: []
}


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
                case 'Manager':
                    break;
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promptIntern();
                    break;
                case 'All positions are filled, no need to add anymore': // no break needed at the end of switch/case statement 
                    buildHTML();
                    

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
            `${answers.managerOfficeNumber}`,
        );
        teamEmployed.managers.push(manager);
        buildTeamMenu()
    });



// Building questions for each role being added

promptEngineer = () => {
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
            teamEmployed.engineers.push(engineer)
            buildTeamMenu()
        });
}

promptIntern = () => {
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
            name: 'internSchool',
            message: 'What is the Interns Github user name?'
        }
    ])
        .then((answers) => {
            const intern = new Intern(
                `${answers.internName}`,
                `${answers.internId}`,
                `${answers.internEmail}`,
                `${answers.internSchool}`,
            );
            teamEmployed.interns.push(intern);
            buildTeamMenu()
        });
}

const buildHTMLPage = () =>
    // INSERT HTML FILE HERE 
    `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <title>Employee Cards</title>
  </head>
  
  <body>
    <section class="hero is-small is-primary mb-3">
      <div class="hero-body">
        <h1 class="title has-text-centered">
        The Squad
        </h1>
      </div>
    </section>
  
  
    <div class="columns is-centered has-text-centered">
      <!-- MANAGER -->
      <div class="column is-two-thirds has-text-centered is-centered">
        <div class="card is-one-third has-text-centered ">
  
   ${buildManagerCollection()}
        </div>
      </div>
    </div>
      <!-- ENGINEER -->
    <div class="columns has-text-centered is-centered">
      <div class="column is-one-third">
      ${buildEngineerCollection()}
      </div>
  
      <!-- INTERN -->
      <div class="column is-one-third">
        <div class="card is-one-third has-text-centered ">
    ${buildInternCollection()}
         </div>
     </div>
    </div>
  
  </body>
  
  </html>`

// Build HTML file 

let buildHTML = () => {

    fs.writeFile('./generated-HTML/main.html', buildHTMLPage(), (err) => {
        err ? console.log(err, "Something went wrong :(") : console.log('Team created - check generate-HTML folder to view')
    })
}

// Building Manager Card(s)

function createManagerCard(manager) {
    return `<div class="card is-one-third has-text-centered ">
   
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4"> Manager <i class="fas fa-briefcase"></i></p>
        <p class="subtitle is-6">${manager.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p>Employee ID: ${manager.id}</p>
      <a target="_blank" href="mailto:${manager.email}">${manager.email}</a>
      <p>Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
  </div>`

}
function buildManagerCollection() {
    let managerCollection = "";
    teamEmployed.managers.forEach(manager => {
        managerCollection += createManagerCard(manager);
    })
    return managerCollection
} 

// Build Engineer Card(s)

function buildEngineerCard(engineer) {
    return `<div class="card is-one-third has-text-centered ">
   
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Engineer <i class="fas fa-briefcase"></i></p>
        <p class="subtitle is-6">${engineer.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p>Employee ID: ${engineer.id}</p>
      <a target="_blank" href="mailto:${engineer.email}">${engineer.email}</a>
      <p> <a target="_blank" href="https://github.com/${engineer.github}">Github</a></p>
    </div>
  </div>
  </div>`

}
function buildEngineerCollection() {
    let engineerCollection = "";
    teamEmployed.engineers.forEach(engineer => {
        engineerCollection += buildEngineerCard(engineer);
    })
    return engineerCollection
} 

// Build Intern Card(s)

function buildInternCard(intern) {
    return `<div class="card is-one-third has-text-centered ">
   
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Intern <i class="fas fa-briefcase"></i></p>
        <p class="subtitle is-6">${intern.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p>Employee ID: ${intern.id}</p>
      <a target="_blank" href="mailto:${intern.email}">${intern.email}</a>
      <p>School: ${intern.school}</p>
    </div>
  </div>
  </div>`

}
function buildInternCollection() {
    let internCollection = "";
    teamEmployed.interns.forEach(Intern => {
        internCollection += buildInternCard(Intern);
    })
    return internCollection
} 
