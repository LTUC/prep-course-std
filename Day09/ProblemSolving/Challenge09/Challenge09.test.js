'use strict';

const { arrInc, roundDecimals, employeesBonus, mostExpensive } = require('./Challenge09');

const data = [{
        name: "Robert",
        section: "Transport",
        workHours: 8,
        salaries: "3000$"
    },
    {
        name: "Richard",
        section: "HR",
        workHours: 6,
        salaries: "4000$"
    },
    {
        name: "Christopher",
        section: "Production",
        workHours: 10,
        salaries: "4500$"
    },
    {
        name: "Andrew",
        section: "HouseKeeping",
        workHours: 9,
        salaries: "3200$"
    }
];

const res = [{
        name: "Robert",
        section: "Transport",
        workHours: 8,
        salaries: "3050$"
    },
    {
        name: "Richard",
        section: "HR",
        workHours: 6,
        salaries: "4050$"
    },
    {
        name: "Christopher",
        section: "Production",
        workHours: 10,
        salaries: "4600$"
    },
    {
        name: "Andrew",
        section: "HouseKeeping",
        workHours: 9,
        salaries: "3300$"
    }
];

const data2 = [{
        name: "Jack",
        section: "Coding",
        workHours: 6,
        salaries: "9000$"
    },
    {
        name: "Andrew",
        section: "Marketing",
        workHours: 9,
        salaries: "5000$"
    }
];

const res2 = [{
        name: "Jack",
        section: "Coding",
        workHours: 6,
        salaries: "9050$"
    },
    {
        name: "Andrew",
        section: "Marketing",
        workHours: 9,
        salaries: "5100$"
    }
];

describe('Challenge09', () => {
    test('Array-Increment', () => {
        expect(arrInc([5, 15, 3, 10, 32])).toStrictEqual([15, 25, 13, 20, 42]);
        expect(arrInc([6, 0, -10, 33])).toStrictEqual([16, 10, 0, 43]);
    })

})

describe('Challenge09', () => {
    test('Round-Decimals', () => {
        expect(roundDecimals([5.4, 5.5, 6.7, 6.8])).toStrictEqual([5, 6, 7, 7]);
        expect(roundDecimals([6.1, 2.3, 5, 2.9])).toStrictEqual([6, 2, 5, 3]);
    })

})

describe('Challenge09', () => {
    test('Employees-Bonus', () => {
        expect(employeesBonus(data)).toStrictEqual(res);
        expect(employeesBonus(data2)).toStrictEqual(res2);
    })

})

describe('Challenge10', () => {
    test('Most-Expensive', () => {
        expect(mostExpensive(200, [35, 15, 75, 180, 150, 50], [5, 150, 35, 120, 75, 50, 100])).toStrictEqual(200);
        expect(mostExpensive(150, [35, 15, 75], [5, 150, 100])).toStrictEqual(135);
    })

})