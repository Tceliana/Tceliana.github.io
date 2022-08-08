
export function Clamp(min:number, max:number, value:number):number
{
	if(value < min)
		return min;
	if(value > max)
		return max;
	return value;
}
