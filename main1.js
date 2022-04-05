var f=50;    var a = 55;   var s = 75;  var d = 85; 
var p = 77;     var t;  var m;
t=f+a+s+d+p;    m=t/5;
if(m>=75 && m<=100)
{   document.getElementById("r").innerHTML = "Trés Bien";
}
else if(m>=50 && m<=74)
{   document.getElementById("r").innerHTML = "Bien";
}
else 
{   document.getElementById("r").innerHTML = "Echouer";
}
document.getElementById("f").innerHTML = f;
document.getElementById("a").innerHTML = a;
document.getElementById("s").innerHTML = s;
document.getElementById("d").innerHTML = d;
document.getElementById("p").innerHTML = p;
document.getElementById("t").innerHTML = t;
document.getElementById("m").innerHTML = m;






