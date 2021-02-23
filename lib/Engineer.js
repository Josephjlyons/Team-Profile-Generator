const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub(){
        console.log(`Engineers Github name is ${this.github}`);
        return this.github;
    }
}

module.exports = Engineer;