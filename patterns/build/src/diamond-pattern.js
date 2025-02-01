"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const centered_flipped_odd_triangle_1 = require("./centered-flipped-odd-triangle");
const centered_odd_triangle_1 = require("./centered-odd-triangle");
const diamondPattern = (height) => {
    let printedString = "";
    printedString += (0, centered_odd_triangle_1.default)(height);
    printedString += (0, centered_flipped_odd_triangle_1.default)(height);
    return printedString;
};
exports.default = diamondPattern;
//# sourceMappingURL=diamond-pattern.js.map