const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/Employee'); // might not need this? 
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
    message: 'What is the Manager name?',
    validate: (input) => {
      if (input.length > 1)
        return true;

      return "Please enter a valid name!"

    }

  },
  {
    type: 'number',
    name: 'managerId',
    message: 'What is the Manager Id?',
    validate: (number) => {
      if (isNaN(number))
        return "Please enter numerical id!"

      return true
    }
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is the Manager email?',
    validate: (input) => {

      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
        return (true)
      }
      return "You have entered an invalid email address!"
    }
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is the Managers office number? (no dashes)',
    validate: (input) => {
      if (isNaN(input))
        return "Please enter office number!"

      return true
    }
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
      message: 'What is the Engineers name?',
      validate: (input) => {
        if (input.length > 1)
          return true;

        return "Please enter a valid name!"

      }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What is the Engineers Id?',
      validate: (number) => {
        if (isNaN(number))
          return "Please enter numerical id!"

        return true
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is the Engineers email?',
      validate: (input) => {

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
          return (true)
        }
        return "You have entered an invalid email address!"
      }

    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is the Engineers Github user name?',
      validate: (input) => {
        if (input.length > 1)
          return true;

        return "Please enter a valid name!"

      }
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
      message: 'What is the Interns name?',
      validate: (input) => {
        if (input.length > 1)
          return true;

        return "Please enter a valid name!"

      }

    },
    {
      type: 'input',
      name: 'internId',
      message: 'What is the Interns Id?',
      validate: (number) => {
        if (isNaN(number))
          return "Please enter numerical id!"

        return true
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is the Interns email?',
      validate: (input) => {

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
          return (true)
        }
        return "You have entered an invalid email address!"
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Where did the Intern attend school?',
      validate: (input) => {
        if (input.length >= 1)
          return true;

        return "Please enter a valid name!"

      }
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
    <link rel="stylesheet" href="../src/style.css">
    <title>The Team</title>
  </head>
  
  <body class="body">
    <section class="hero is-small is-primary mb-3 has-background-black">
      <div class="hero-body">
        <h1 class="title has-text-centered">
        The Team
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
  return `<div class="card is-one-third has-text-centered">
   
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4"> Manager <i class="fas fa-sitemap"></i></p>
        <p class="subtitle">${manager.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p class="details">Employee ID: ${manager.id}</p>
      <p class="details">Office Number: ${manager.officeNumber.slice(0, 3) + "-" + manager.officeNumber.slice(3, 6) + "-" + manager.officeNumber.slice(6)}</p>
      <a class="details" target="_blank" href="mailto:${manager.email}">${manager.email}</a>
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
        <p class="subtitle">${engineer.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p class="details">Employee ID: ${engineer.id}</p>
      <p> <a class="details" target="_blank" href="https://github.com/${engineer.github}"><i class="fab fa-github-square"></i>Github</a></p>
      <a class="details" target="_blank" href="mailto:${engineer.email}">${engineer.email}</a>
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
        <p class="subtitle">${intern.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p class="details">Employee ID: ${intern.id}</p>
      <p class="details"><i class="fas fa-university"></i>  ${intern.school}</p>
      <a class="details" target="_blank" href="mailto:${intern.email}">${intern.email}</a>
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
