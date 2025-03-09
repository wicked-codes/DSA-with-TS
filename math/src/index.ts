import {countNumberOfDigits_1, countNumberOfDigits_logN, reverse} from "./number";
import {checkPalindrome} from "./palindrome";
import {getHCF, getLCM} from "./hcf_lcm";
console.log(getHCF(69,420));
console.log(getLCM(69,420));
console.log(countNumberOfDigits_1(69420)); // O(1)
console.log(countNumberOfDigits_logN(69420)); //O()
console.log(reverse(69420));
console.log(checkPalindrome(6996)); // false