import { add } from "./add";

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number for single number', () => {
    expect(add('1')).toBe(1);
})

test('should return the sum of two numbers', () => {
    expect(add('8,2')).toBe(10);
})

test('should return the sum of any amount of numbers', () => {
    expect(add('1,2,4,5')).toBe(12);
})