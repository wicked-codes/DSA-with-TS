"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangle_pattern_1 = require("./triangle-pattern");
const triangle_pattern_reverse_1 = require("./triangle-pattern-reverse");
const baseTriangleOnLeft = (height) => {
    let printedString = "";
    printedString = `${(0, triangle_pattern_1.default)(height)}\n${(0, triangle_pattern_reverse_1.default)(height - 1)}`;
    return printedString;
};
exports.default = baseTriangleOnLeft;
//# sourceMappingURL=base-triangle-on-left.js.map