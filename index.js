


function convert(){
var con = document.getElementById("converter").value;
var ans = document.getElementById("type");
document.getElementById("label").innerHTML = con+":";
ans.innerHTML = "";
con.split();
for(i=0; i<con.length; i++){
var lineBreak = ascii(con[i]);
console.log(lineBreak.toString(2))

ans.innerHTML += lineBreak.toString(2)+" ";
}}
function ascii (a) { 
return a.charCodeAt(0); 
}
