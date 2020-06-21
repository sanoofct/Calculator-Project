function buttonclick(val) 
{
    console.log(val)
    document.getElementById("screen").value+=val;
}

function clearDisplay(){
    document.getElementById("screen").value=""
    }
function equalbutton(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function backSpace(){

    
    document.getElementById('screen').value
    document.getElementById("screen").value = value.substr(0, value.length - 1);
    document.value = document.value.substring(0, document.value.length - 1);
}