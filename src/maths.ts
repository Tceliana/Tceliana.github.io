
export function Clamp(min, max, value)
{
	if(value < min)
		return min;
	if(value > max)
		return max;
	return value;
}
