"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const centeredFlippedOddTriangle = (height) => {
    let printedString = "";
    for (let row = height - 1; row >= 0; row--) {
        for (let space = 0; space < height - row - 1; space++) {
            printedString += " ";
        }
        for (let star = 0; star < 2 * row + 1; star++) {
            printedString += "*";
        }
        printedString += "\n";
    }
    return printedString;
};
exports.default = centeredFlippedOddTriangle;
//# sourceMappingURL=centered-flipped-odd-triangle.js.map