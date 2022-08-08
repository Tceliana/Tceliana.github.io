
export function Clamp(min:number, max:number, value:number):number
{
	if(value < min)
		return min;
	if(value > max)
		return max;
	return value;
}

export function getPercentage(start: number, end: number, value: number): number {
	let returned = (value - start) / (end - start);
	return Clamp(0, 1, returned);
}