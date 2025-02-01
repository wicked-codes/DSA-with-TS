const triangleNumberPattern = (height: number): string => {
    let printedString = "";
    for (let col = 0; col < height; col++) {
        for (let row = 0; row < col + 1; row++) {
            printedString += `${row+1}`;
        }
        printedString += (col === height - 1) ? "" : "\n";
    }
    return printedString;
}

export default triangleNumberPattern;