import trianglePattern from "./triangle-pattern";
import trianglePatternReverse from "./triangle-pattern-reverse";

const baseTriangleOnLeft = (height : number): string =>{
    let printedString = "";
    printedString = `${trianglePattern(height)}\n${trianglePatternReverse(height-1)}`;
    return printedString;
}

export default baseTriangleOnLeft;