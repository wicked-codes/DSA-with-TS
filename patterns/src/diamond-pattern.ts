import centeredFlippedOddTriangle from "./centered-flipped-odd-triangle";
import centeredOddTriangle from "./centered-odd-triangle";

const diamondPattern = (height: number): string =>{
    let printedString = "";
    printedString += centeredOddTriangle(height);
    printedString += centeredFlippedOddTriangle(height)
    return printedString
}

export default diamondPattern;