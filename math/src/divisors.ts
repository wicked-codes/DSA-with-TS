import { get } from "node:http";

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

const checkIfPrime = (n: number): boolean => {
    if(getDivisors(n).length === 2){
        return true;
    }
    return false;
}

export {getDivisors, checkIfPrime};