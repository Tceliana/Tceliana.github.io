

export default class FileSystem 
{
	public static ReadFile(filePath:string) : string
	{
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "/Images/planes/curve1.svg", false);
		rawFile.send(null);

		let isReadingOk: boolean = (rawFile.readyState == 4 && (rawFile.status === 200 || rawFile.status == 0))
		if(isReadingOk == false)
		{
			alert("Error reading " + filePath);
			throw Error("Error reading " + filePath);
		}
		return rawFile.responseText;	
	}

	public static ConvertToXML(fileContent:string):Document
	{
		return new window.DOMParser().parseFromString(fileContent, "text/xml");
	}
}

