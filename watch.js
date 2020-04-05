var startStopFlag=0;

var startTime;
var interval;
function clickButton(){
  var flagButton=document.getElementById('flagButton');
  if(startStopFlag===0){
    startTime=new Date();
    startStopFlag=1;
    flagButton.value="stop";
    interval=setInterval("elapsedTime()",1);
  }
  else{
    elapsedTime();
    startStopFlag=0;
    flagButton.value="start";
    clearInterval(interval);
  }
}
function elapsedTime(){
  var stopTime=new Date();
  var elapsed=stopTime.getTime()-startTime.getTime();
  var H=Math.floor(elapsed/(60*60*1000));//時間
  elapsed=elapsed-(H*60*60*1000);
  var M=Math.floor(elapsed/(60*1000));//分
  elapsed=elapsed-(M*60*1000);
  var S=Math.floor(elapsed/1000);//秒
  var MS=elapsed%1000;//ミリ秒
  var timer=document.getElementById('timer');
  timer.value=H+":"+M+":"+S+":"+MS;
}
