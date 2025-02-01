"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangleNumberPatternColumn = (height) => {
    let printedString = "";
    for (let col = 0; col < height; col++) {
        for (let row = 0; row < col + 1; row++) {
            printedString += `${col + 1}`;
        }
        printedString += (col === height - 1) ? "" : "\n";
    }
    return printedString;
};
exports.default = triangleNumberPatternColumn;
//# sourceMappingURL=triangle-number-pattern-column.js.map