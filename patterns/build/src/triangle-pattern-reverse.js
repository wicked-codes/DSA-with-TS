"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trianglePatternReverse = (height) => {
    let printedString = "";
    for (let col = height; col > 0; col--) {
        for (let row = col; row > 0; row--) {
            printedString += "*";
        }
        printedString += "\n";
    }
    return printedString;
};
exports.default = trianglePatternReverse;
//# sourceMappingURL=triangle-pattern-reverse.js.map