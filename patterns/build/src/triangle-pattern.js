"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trianglePattern = (height) => {
    let printedString = "";
    for (let col = 0; col < height; col++) {
        for (let row = 0; row < col + 1; row++) {
            printedString += "*";
        }
        printedString += (col === height - 1) ? "" : "\n";
    }
    return printedString;
};
exports.default = trianglePattern;
//# sourceMappingURL=triangle-pattern.js.map