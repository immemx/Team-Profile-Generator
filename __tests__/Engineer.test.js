const Engineer = require("../lib/Engineer")

// test('Creates an engineer object', () => {
//     const engineer = new Engineer('engine');

//     expect(engineer.name).toBe('engine');
//     expect(engineer.position).toBe('engineer')
//     expect(engineer.id).toEqual(expect.any(Number));
//     expect()
// })

test('Set Github account and getGitHub()', function() {

    const employeeGithub = new Engineer('dave', 7, 'email@gmail', 'GITHUB')

    expect(employeeGithub.gitHub).toEqual(expect.any(String))
    expect(employeeGithub.getGitHub()).toEqual(expect.any(String))

})

test('getRole() works', function() {

    const fakeEngineer = new Engineer('dave', 7, 'email@gmail', 'GITHUB')

    expect(fakeEngineer.getRole()).toBe('Engineer');
})