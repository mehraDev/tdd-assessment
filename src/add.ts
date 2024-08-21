export function add(numbers: string): number {
    if(numbers === ''){
        return 0;
    }
    return numbers.split(',').map(num => parseInt(num, 10)).reduce((a,b) => a + b , 0);
}