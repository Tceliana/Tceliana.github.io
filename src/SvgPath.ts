import FileSystem from "./FileSystem";

export default class SVGPath 
{
	private xOffset : number;
	private yOffset : number;
	private width   : number;
	private height  : number;
	public svgPath : string;

	private constructor(xOffset:number, yOffset:number, width:number, height:number, svgPath: string) 
	{
		this.xOffset = xOffset;
		this.yOffset = yOffset;
		this.width = width;
		this.height = height;
		this.svgPath = svgPath;
	}

	public getViewPort() :string 
	{
		return " "+this.xOffset+" "+ this.yOffset + " " + this.width + " " + this.height;
	}

	public static LoadFromFile(filePath :string):SVGPath
	{
		const fileContent = FileSystem.ReadFile(filePath);
		const xmlFile = FileSystem.ConvertToXML(fileContent);
		
		const viewBox = SVGPath.GetViewBox(xmlFile);
		const path = SVGPath.GetPath(xmlFile);
		const transform = SVGPath.GetTranslation(xmlFile);

		viewBox[0] = viewBox[0]-transform[0];
		viewBox[1] = viewBox[1]-transform[1];

		return new SVGPath(...viewBox, path);
	}

	private static GetViewBox(xmlFile : Document) : [number, number, number, number]
	{
		let svg = xmlFile.getElementsByTagName("svg")
		console.assert(svg.length > 0);
		let viewport:string = svg[0].getAttribute("viewBox");
		return viewport.split(" ").map(s => Number(s)) as [number, number, number, number]
	}	

	private static GetPath(xmlFile : Document) : string
	{
		let path = xmlFile.getElementsByTagName("path")
		console.assert(path.length > 0);
		return path[0].getAttribute("d");
	}	
	
	private static GetTranslation(xmlFile: Document) : [number, number]
	{
		let g = xmlFile.getElementsByTagName("g")
		if(g.length === 0)
			return [0,0]
		let transform:string = g[0].getAttribute("transform");
		if(transform === null || transform.includes("translate(") === false)
			return [0,0]
		let values = transform.split("translate(")[1].split(")")[0].split(",")
		return values.map(s => Number(s)) as [number, number];
	}

}

