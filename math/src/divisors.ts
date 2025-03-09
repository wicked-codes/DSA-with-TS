const getDivisors = (n: number): number[] => {
    const divisors: number[] = [];
    const threshold = Math.floor(Math.sqrt(n));
    for(let i = 1; i <= threshold; i++){
        if(n%i === 0){
            divisors.push(i);
        }
    }
    divisors.push(n);
    return divisors;
}

export {getDivisors};