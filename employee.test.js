const employee = require('./employee')

test('makeChagne)', () => {
    const bill = 200
    const price = 127

    expect(employee.makeChange(bill, price)).toBe(73)
})
