function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username.length > 0 && password.length > 0) {
    if (username == "aa" && password == "a") {
      window.location.replace("shop.html");
    } else {
      alert("Wrong credentials");
    }
  } else {
    alert("Ener username and password");
  }
  return false;
}

function showProduct() {
  var ele = document.getElementById("search").value;
  if (ele.length == 0) {
    alert("Product name is empty");
  } else {
    let elem = document.getElementById("items");
    elem.style.visibility = "visible";
  }
}
