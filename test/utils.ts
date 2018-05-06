import test from 'ava';
import { getRandomItems, mean } from '../src/utils';

test('getRandomItems - result is a set', t => {
    const size = 10;
    const list = new Map();

    for (let i = 0; i < size; i++) list.set(i, i);

    const result = getRandomItems(Array.from(list.values()), size);
    const resultSet = new Set();
    t.log(result);
    t.true(
        result.every(item => {
            let has = resultSet.has(item);
            !has && resultSet.add(item);

            return !has;
        })
    );
});

test('mean - compute the mean of a list of numbers', t => {
    const numbers: number[] = [];
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        const num = Math.random();
        sum += num;
        numbers.push(num);
    }

    t.is(mean(...numbers), sum / 10);
});
