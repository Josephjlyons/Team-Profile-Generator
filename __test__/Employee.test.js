const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('can set an employee name', () => {
    const name  = 'Joe';
    const employee = new Employee(name);

    expect(employee.name).toBe('Joe'); // compares name 
});

test('can set employee email', () => {
    const email = 'josephjlyons90@gmail.com';
    const employee = new Employee('Joe', 1 , email);
    
    expect(employee.getEmail()).toBe('josephjlyons90@gmail.com');
})