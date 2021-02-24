const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        console.log(`Engineers Github name is ${this.github}`);
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;