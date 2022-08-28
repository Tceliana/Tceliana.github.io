export function getPercentage(start: number, end: number, value: number): number {
	let returned = (value - start) / (end - start);
	return Clamp(0, 1, returned);
}


export function shuffleArray(array:any[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export function getRandomNumber(min : number, max : number) : number
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Clamp(min:number, max:number, value:number):number
{
	if(value < min)
		return min;
	if(value > max)
		return max;
	return value;
}
