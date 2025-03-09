"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = exports.countNumberOfDigits_1 = exports.countNumberOfDigits_logN = void 0;
const countNumberOfDigits_logN = (num) => {
    let numberOfDigits = 0;
    while (num !== 0) {
        numberOfDigits++;
        num = Math.floor(num / 10);
    }
    return numberOfDigits;
};
exports.countNumberOfDigits_logN = countNumberOfDigits_logN;
const countNumberOfDigits_1 = (num) => {
    return Math.floor(Math.log10(num) + 1);
};
exports.countNumberOfDigits_1 = countNumberOfDigits_1;
const reverse = (x) => {
    let number = '';
    while (x !== 0) {
        number += x % 10;
        x = Math.floor(x / 10);
    }
    return parseInt(number);
};
exports.reverse = reverse;
//# sourceMappingURL=countNumberOfDigits.js.map