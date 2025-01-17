"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areaPattern = (width, height) => {
    let printedString = "";
    for (let col = 0; col < height; col++) {
        for (let row = 0; row < width; row++) {
            printedString += (row == width - 1) ? "*" : "* ";
        }
        printedString += (col == height - 1) ? "" : "\n";
    }
    return printedString;
};
exports.default = areaPattern;
//# sourceMappingURL=area-pattern.js.map