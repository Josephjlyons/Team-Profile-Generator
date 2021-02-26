const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('can set an office number', () => {
    const officeNumber  = 6035555555;
    const manager = new Manager("", "" , "", officeNumber);

    expect(manager.officeNumber).toBe(6035555555); 
});

test('can set Role', () => {

    
    const manager = new Manager(); 

    expect(manager.getRole()).toBe('Manager');
})
