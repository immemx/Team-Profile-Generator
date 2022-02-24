const Employee = require("../lib/Employee")

// Make sure the "name" call works with employee
test('Creates a name and getName', function() {

    const newEmployee = new Employee('Dave')

    expect(newEmployee.name).toBe('Dave')
    expect(newEmployee.getName()).toBe('Dave')
})

//Make sure the "ID" call works with employee
test("Creates an ID and getId", function() {
    
    const fakeId = new Employee('dave', 7, 'email@gmail');

    expect(fakeId.id).toEqual(expect.any(Number))
    expect(fakeId.getId()).toEqual(expect.any(Number))
})

//Make sure the "email" call works with employee
test("Creates an email and getEmail", function() {

    const fakeEmail = new Employee('dave', 7, 'email@gmail');

    expect(fakeEmail.email).toEqual(expect.any(String))
    expect(fakeEmail.getEmail()).toEqual(expect.any(String))
})

//Make sure getRole() works
test("getRole() works", function() {

    const fakePerson = new Employee('dave', 7, 'email@gmail')

    expect(fakePerson.getRole()).toBe('Employee')
})