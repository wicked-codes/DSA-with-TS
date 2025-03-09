import {countNumberOfDigits_logN, reverse} from "./number";
import {checkPalindrome} from "./palindrome";
import {getHCF, getLCM} from "./hcf_lcm";
import {isArmstrongNumber} from "./armstrong";
console.log('Armstrong Numbers: ', isArmstrongNumber(69420));
console.log('HCF: ',getHCF(69,420));
console.log('LCM: ', getLCM(69,420));
console.log('Number of Digits: ',countNumberOfDigits_logN(69420));
console.log('Reverse: ',reverse(69420));
console.log('Palindrome: ', checkPalindrome(6996)); // false