export function add(numbers: string): number {
    if(numbers === ''){
        return 0;
    }

    if(numbers.startsWith('//')){
        const delimiterEndIndex = numbers.indexOf('\n');
        const delimiter = numbers.substring( 2, delimiterEndIndex);
        const numbersString = numbers.substring(delimiterEndIndex + 1);

        return numbersString.split(delimiter).map(num => parseInt(num, 10)).reduce((a,b) => a + b , 0);
    }

    return numbers.split(/[\n,]/).map(num => parseInt(num, 10)).reduce((a,b) => a + b , 0);
}