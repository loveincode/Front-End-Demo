/**
  * 初始化Session对象
  */
var session = new IFlyTtsSession({
      'url' : 'http://webapi.openspeech.cn/',							
      'interval' : '30000', 
      'disconnect_hint' : 'disconnect',
      'sub' : 'tts'
 });

/**
  * 输入文本，输出语音播放链接 
  * @content 待合成文本(不超过4096字节)
  */
function play(content) {
    /***********************************************************以下签名过程需根据实际应用信息填入***************************************************/
 
    var appid = "574807f4";                              //应用APPID，在open.voicecloud.cn上申请即可获得
    var timestamp = new Date().toLocaleTimeString();                      //当前时间戳，例new Date().toLocaleTimeString()
    var expires = 60000;                          //签名失效时间，单位:ms，例60000		
    //!!!为避免secretkey泄露，签名函数调用代码建议在服务器上完成
    var signature = faultylabs.MD5(appid + '&' + timestamp + '&' + expires + '&' + "cd85bdbda3e7450e");		
   /************************************************************以上签名过程需根据实际应用信息填入**************************************************/
   
	var params = { "params" : "aue = speex-wb;7, ent = intp65, spd = 50, vol = 50, tte = utf8, caller.appid=" + appid + ",timestamp=" + timestamp + ",expires=" + expires+",vcn=vixy", "signature" : signature, "gat" : "mp3"};	
	session.start(params, content, function (err, obj)
    {	
		$("#audio").attr("src" , "");
	    if(err) {
		    alert("语音合成发生错误，错误代码 ：" + err);
	    } else {
	        if(audio != null)
			{
			    audio.pause();
			}
	        var url = "http://webapi.openspeech.cn/" + obj.audio_url;
	        $("#audio").attr("src" , url);
	        document.getElementById("audio").play();
	    }
    });
};
