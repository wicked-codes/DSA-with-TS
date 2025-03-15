const getSmallestOfTheArray = (input:number[]): number[] =>{
	let smallest = [Infinity, 0];
	for(let i = 0; i < input.length; i++ ){
		if(input[i] < smallest[0]){
			smallest = [input[i], i];
		}
	}
	return smallest;
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


