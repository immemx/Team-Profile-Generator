const Engineer = ('../lib/Engineer.js')

test('Creates an engineer object', () => {
    const engineer = new Engineer('engine');

    expect(engineer.name).toBe('engine');
    expect(engineer.position).toBe('engineer')
    expect(engineer.id).toEqual(expect.any(Number));
})