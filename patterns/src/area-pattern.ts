const areaPattern = (width: number, height: number): string => {
    let printedString: string = ""
    for (let col = 0; col < height; col++) {
        for (let row = 0; row < width; row++) {
            printedString += (row == width - 1) ? "*" : "* ";
        }
        printedString += (col == height - 1) ? "" : "\n";
    }
    return printedString;
}

export default areaPattern;