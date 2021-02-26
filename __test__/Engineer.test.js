const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('can set a github user name ', () => {
    const github  = "josephjlyons";
    const engineer = new Engineer("", "" , "", github);

    expect(engineer.github).toBe("josephjlyons"); 
});

test('can set Role', () => {

    
    const engineer = new Engineer(); 

    expect(engineer.getRole()).toBe('Engineer');
})