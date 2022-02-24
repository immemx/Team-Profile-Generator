const Manager = require('../lib/Manager')

test('Set Office Number and getOffice()', function() {
    
    const FakeManager = new Manager('dave', 7, 'email@gmail', 8)

    expect(FakeManager.getOffice()).toEqual(expect.any(Number))
})

test('getRole() works', function() {

    const FakeManager = new Manager('dave', 7, 'email@gmail', 8)

    expect(FakeManager.getRole()).toBe('Manager')
})