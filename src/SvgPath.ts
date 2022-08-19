import FileSystem from "./FileSystem";

export default class SVGPath 
{
	
	private _xOffset : number;
	private _yOffset : number;
	private _width   : number;
	private _height  : number;
	
	public svgPath : string; // The definition of the path itself inside the .svg file. Example: "M0,0 0,10 A158,10,2,1 Q12,1,2,54 bla bla bla..."
	public length  : number;
	
	static Cache = new Map<string,SVGPath>();

	private constructor(xOffset:number, yOffset:number, width:number, height:number, svgPath: string) 
	{
		
		this._xOffset = xOffset;
		this._yOffset = yOffset;
		this._width = width;
		this._height = height;
		this.svgPath = svgPath;
		this.length = this.getLength();
	}

	public get viewBox() : string 
	{
		return " "+this._xOffset+" "+ this._yOffset + " " + this._width + " " + this._height;
	}


	public static LoadFromFile(filePath :string):SVGPath
	{
		if(SVGPath.Cache.has(filePath) === false)
		{
			const fileContent = FileSystem.ReadFile(filePath);
			const xmlFile = FileSystem.ConvertToXML(fileContent);
			
			const viewBox = SVGPath.GetViewBox(xmlFile);
			const path = SVGPath.GetPath(xmlFile);
			const transform = SVGPath.GetTranslation(xmlFile);
	
			viewBox[0] = viewBox[0]-transform[0];
			viewBox[1] = viewBox[1]-transform[1];
	
			let returned = new SVGPath(...viewBox, path);
			SVGPath.Cache.set(filePath, returned);	
		}

		return SVGPath.Cache.get(filePath);

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


	private getLength():number
	{
		var tag = document.createElementNS("http://www.w3.org/2000/svg", "svg");	
		tag.setAttributeNS(null, "viewBox", this.viewBox);

		var path = document.createElementNS('http://www.w3.org/2000/svg',"path");  
		path.setAttributeNS(null, "d", this.svgPath);

		return path.getTotalLength();
	}

}

