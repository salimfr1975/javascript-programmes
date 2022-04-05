document.write("<table border='0px' width='400px' cellpadding='10px'>");
var t = 5;  var s;
for(var n=1;n<=15;n++)
{       document.write("<tr>");
        s=t*n;
        document.write("<td>"+t+"</td>");
        document.write("<td>"+"X"+"</td>");
        document.write("<td>"+n+"</td>");
        document.write("<td>"+"="+"</td>");
        document.write("<td>"+s+"</td>");
        document.write("</tr>");
}
document.write("</table>");

