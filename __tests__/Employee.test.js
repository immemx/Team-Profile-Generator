const Employee = require("../lib/Employee")

// Test Making a new employee element with the name of dave
test('Creates an Employee Object', function() {

 const newEmployee = new Employee('Dave')

 expect(newEmployee.name).toBe('Dave')
 expect(newEmployee.getName()).toBe('Dave')
})