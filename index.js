window.onload=function() {
window.alert('Hit left alt To convert from binary and Hit right alt To convert from text!');
var con = document.getElementById("converter");
con.addEventListener('keydown', function(event) {
  if (event.code == 'AltLeft') {
    convertB();
  }
  if (event.code == 'AltRight') {
    convertW();

  }
  
});

function convertB() {
  var con = document.getElementById("converter").value;
  var ans = document.getElementById("type");
  document.getElementById("label").innerHTML = con + " :";
  ans.innerHTML = "";
  con.split();
  for (i = 0; i < con.length; i++) {
    var lineBreak = ascii(con[i]);
    console.log(lineBreak.toString(2))

    ans.innerHTML += lineBreak.toString(2) + " ";


  }
}

function Bi(str) {

    var binString = '';

    str.split(' ').map(function(bin) {
      binString += String.fromCharCode(parseInt(bin, 2));
    });
    return binString;
  }

function ascii(a) {
  return a.charCodeAt(0);
}

function convertW() {
  var con = document.getElementById("converter").value;
  var ans = document.getElementById("type");
  var lol;
  ans.innerHTML = "";
  cons = con.split(" ", con.length);
  for (i = 0; i < cons.length; i++) {
    lol = Bi(cons[i]);
  	ans.innerHTML += lol;
  }
	document.getElementById("label").innerHTML = 'Your code translates to' + " :";
  

  
}

}
