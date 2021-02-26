const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        // console.log(`Managers office number is ${this.officeNumber}`);
        return this.officeNumber;
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;