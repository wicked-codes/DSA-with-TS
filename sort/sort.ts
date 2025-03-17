const getSmallestOfTheArray = (input:number[]): number[] =>{
	let smallest = [Infinity, 0];
	for(let i = 0; i < input.length; i++ ){
		if(input[i] < smallest[0]){
			smallest = [input[i], i];
		}
	}
	return smallest;
}

const getGreatestOfTheArray = (input:number[]): number[] =>{
	let greatest = [-Infinity, 0];
	let count = 0;
	const greatMap = {};
	for(let i = 0; i < input.length; i++ ){
		if(input[i] > greatest[0]){
			greatest = [input[i], i];
			greatMap[count] = input[i];
			count++;
		}
	}
	return greatest;
}

const getNthGreatestOfTheArray = (input:number[], n:number): number[] =>{
	let greatest = [-Infinity, 0];
	let count = 0;
	const greatMap = {};
	for(let i = 0; i < input.length; i++ ){
		if(input[i] > greatest[0]){
			greatest = [input[i], i];
			greatMap[count] = greatest;
			count++;
		}
	}
	const values = Object.values(greatMap);
	if(n > 0 && n < input.length){
		return values[values.length-n];
	}

	return greatest;
}

const selectionSort = (input: number[]) : number[]=>{
	if(!(input.length >= 1)){
		return input;
	}
	for(let i=0; i < input.length; i++){
		const [small, smallIndex] = getSmallestOfTheArray(input.slice(i));
		input[i+smallIndex] = input[i];
		input[i] = small;
	}
	return input;

}

const sort = (arr: number[], key: string):number[] =>{
		switch (key){
		case "s": 
			return selectionSort(arr);
		default:
			return arr;
		}
}

console.dir(sort([1,4,56,39,-30, -1, 20, 64], "s"), {colors: true, depth:null})


