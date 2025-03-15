const trianglePatternReverse = (height: number): string => {
    let printedString = "";
    for (let col = height; col > 0; col--) {
        for (let row = col; row > 0; row--) {
            printedString += "*";
        }
        printedString += "\n";
    }
    return printedString;
}

export default trianglePatternReverse;