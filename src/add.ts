export function add(numbers: string): number {
    if(numbers === ''){
        return 0;
    }

    if(numbers.startsWith('//')){
        const delimiterEndIndex = numbers.indexOf('\n');
        const delimiter = numbers.substring( 2, delimiterEndIndex);
        const numbersString = numbers.substring(delimiterEndIndex + 1);

        const numbersArray = numbersString.split(delimiter).map(num => parseInt(num, 10));

        const negativeNumbers = numbersArray.filter( num => num < 0);

        if(negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
        }
       
         return numbersArray.reduce((a, b) => a + b, 0);
    }

    const numberArray = numbers.split(/[\n,]/).map(num => parseInt(num, 10));
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }

    return numberArray.reduce((a, b) => a + b, 0);
}