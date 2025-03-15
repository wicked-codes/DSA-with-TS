const getHCF = (a: number, b: number): number => {
   while(b !== 0){
        [a,b] = [b, a%b];
   }
    return a;
}
const getLCM = (a: number, b: number): number => {
    return (a*b)/getHCF(a,b);
}

export {getHCF, getLCM};