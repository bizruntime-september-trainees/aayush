var i=0;
function timeout(){
    i=i+1;
    postMessage(i);
    setTimeout("time count" , 500);
}
timeCount();