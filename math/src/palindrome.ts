const checkPalindrome = (str: number): boolean => {
    const reverse = Array.from(str.toString()).reverse();
    return str === parseInt(reverse.join(''));
};

export {checkPalindrome};