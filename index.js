// Note: Like all Javascript password scripts, this is hopelessly insecure as the user can see 
//the valid usernames/passwords and the redirect url simply with View Source.  
// And the user can obtain another three tries simply by refreshing the page.  
//So do not use for anything serious!

var count = 2;
var unArray = ["admin"];
var pwArray = ["admin123"];
var i;
var t = 0;

function newacc() {
  var un = document.myform.username.value;
  var pw = document.myform.pword.value;
  for (i = 0; i < unArray.length; i++) {
    if (un != unArray[i]) {
      t++;
    }else {
    window.alert("There is already a user with that username");
  }
  if (t == unArray.length) {
    if (un.length >= 4) {
      if (pw.length >= 6) {
        unArray.push(un);
        pwArray.push(pw);
        window.alert("Account Created! Please sign in");
      }else {
        window.alert("Password must be at least 6 characters");
      }
    }else {
  window.alert("Username must be at least 4 characters");
}
  }

  }



}

function validate() {
  var un = document.myform.username.value;
  var pw = document.myform.pword.value;
  var valid = false;



  for (var i = 0; i < unArray.length; i++) {
    if ((un == unArray[i]) && (pw == pwArray[i])) {
      valid = true;
      break;
    }
  }

  if (valid) {
    window.alert("Welcome");

    return false;
  }

  var t = " tries";
  if (count == 1) {
    t = " try"
  }

  if (count >= 1) {
    alert("Invalid username and/or password.  You have " + count + t + " left.");
    document.myform.username.value = "";
    document.myform.pword.value = "";
    setTimeout("document.myform.username.focus()", 25);
    setTimeout("document.myform.username.select()", 25);
    count--;
  } else {
    alert("Still incorrect! You have no more tries left!");
    document.myform.username.value = "No more tries";
    document.myform.pword.value = "";
    document.myform.username.disabled = true;
    document.myform.pword.disabled = true;
    return false;
  }

}
