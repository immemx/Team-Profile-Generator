const Intern = require('../lib/Intern')

test('School and getSchool() work!', function() {

    const fakeIntern = new Intern('dave', 7, 'email@gmail', 'SCHOOL')

    expect(fakeIntern.getSchool()).toEqual(expect.any(String))
    expect(fakeIntern.school).toBe('SCHOOL')
})

test('getRole() Works!', function() {

    const fakeIntern = new Intern('dave', 7, 'email@gmail', 'SCHOOL')

    expect(fakeIntern.getRole()).toBe('Intern')
})