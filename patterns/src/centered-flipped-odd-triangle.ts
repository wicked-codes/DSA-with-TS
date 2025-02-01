const centeredFlippedOddTriangle = (height: number): string => {
    let printedString = "";
    for (let row = height-1; row >= 0; row--) {
        for (let space = 0; space < height - row - 1; space++) {
            printedString += " "
        }
        for (let star = 0; star < 2 * row + 1; star++) {
            printedString += "*"
        }
        printedString += "\n";
    }
    return printedString;
}

export default centeredFlippedOddTriangle;