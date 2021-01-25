function enter(num){
    var a = document.getElementById("calcu")
    a.value += num;
}



function erase(){
    var a = document.getElementById("calcu")
    a.value = "";  
}

function ans(){
    var a = document.getElementById("calcu")
    a.value= eval(a.value)

}


function abc(){
    var a = document.getElementById("calcu").value
    a = (a.substr(0,a.length-1));
    document.getElementById("calcu").value=a
}