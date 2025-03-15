const countNumberOfDigits_logN = (num: number): number => {
    let numberOfDigits: number = 0;
    while (num !== 0) {
        numberOfDigits++;
        num = Math.floor(num/10);
    }
    return numberOfDigits;
}
const countNumberOfDigits_1 = (num: number): number => {
  return Math.floor(Math.log10(num)+1);
}
const reverse = (x: number): number =>{
    let number = '';
    while (x !== 0) {
        number += x%10;
        x = Math.floor(x/10);
    }
    return parseInt(number)
};
export {countNumberOfDigits_logN, countNumberOfDigits_1, reverse};