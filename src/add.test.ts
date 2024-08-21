import { add } from "./add";

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number for single number', () => {
    expect(add('1')).toBe(1);
})