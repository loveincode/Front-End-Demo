if(typeof(window.TsCmcObj) != "undefined" && typeof(window.TsCmcObj.Version) != "unknown"  )
{	
	var strVersion = "";
	var scriptUrl = "";
	strVersion = window.TsCmcObj.Version();
	if(strVersion == "6")
	{
		scriptUrl = "engine_loader_v3.js";
	}
	if(strVersion == "5")
	{
		scriptUrl = "engine_loader_v2.js?v=01251045";
	}
	if(strVersion == "4")
	{
		scriptUrl = "engine_loader_v1.js";
	}


	var script = document.createElement("script");  
		script.type = "text/javascript";  
		script.src = scriptUrl;  
		script.charset = "UTF-8";
		document.body.appendChild(script);  

}