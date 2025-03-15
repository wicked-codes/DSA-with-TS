import { countNumberOfDigits_logN } from "./number";
const isArmstrongNumber = (num: number): boolean => {

    const numberOfDigits = countNumberOfDigits_logN(num);
    let temp = num;
    let sum = 0;
    while(temp !== 0){
        sum += Math.pow(temp%10, numberOfDigits);
        temp = Math.floor(temp/10);
    }
    return sum === num;
};

export {isArmstrongNumber};