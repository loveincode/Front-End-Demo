
// 建立一个input file的文件的url返回
function getFileURL(obj) {
	var file = obj.files[0];
	var url = null ; 
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}


function getInputFileSize(obj){  
    obj = $(obj)[0];
    var fileLenth = -1, objValue = obj.value;  
    alert(objValue);
    if (objValue == "") return fileLenth;  
    try {  
        //对于IE判断要上传的文件的大小  
        var fso = new ActiveXObject("Scripting.FileSystemObject"); 
        fileLenth = parseInt(fso.getFile(objValue).size);  
    } catch (e){  
        try{  
            //对于非IE获得要上传文件的大小  
            fileLenth = parseInt(obj.files[0].size);  
        }catch (e) {  
            fileLenth = -1;  
        }  
    }  
    return fileLenth;  
}  

function getInputFileName (obj) {
    obj = $(obj)[0];
    var result = '', objValue = obj.value;  
    if(objValue == "") return result;  
    try {  
        //对于IE判断要上传的文件的名字 
        var fso = new ActiveXObject("Scripting.FileSystemObject"); 
        result = fso.getFile(objValue).name;  
    } catch (e){  
        try{  
            //对于非IE获得要上传文件的名字 
            result = obj.files[0].name;
        }catch (e) {  
            result = '';  
        }  
    }  
    return result;  
}
