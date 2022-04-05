function add()
{
   
    var a=document.getElementById("premiere").value;
    var b=document.getElementById("deuxieme").value;
    var c;
    c = parseInt(a) + parseInt(b);
    document.getElementById("res").innerHTML=c;
}
function sou()
{
   
    var a=document.getElementById("premiere").value;
    var b=document.getElementById("deuxieme").value;
    var c;
    c=parseInt(a) - parseInt(b);
    document.getElementById("res").innerHTML=c;
}
function mul()
{
   
    var a=document.getElementById("premiere").value;
    var b=document.getElementById("deuxieme").value;
    var c;
    c=parseInt(a) * parseInt(b);
    document.getElementById("res").innerHTML=c;
}
function div()
{
   
    var a=document.getElementById("premiere").value;
    var b=document.getElementById("deuxieme").value;
    var c;
    c=parseInt(a) / parseInt(b);
    document.getElementById("res").innerHTML=c;
}