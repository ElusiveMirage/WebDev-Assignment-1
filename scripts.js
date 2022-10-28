/* Place your JavaScript in this file */
let userLogin = false;

function topNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleLoginForm()
{
  var x = document.getElementById("login-container");

  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function loginSubmit()
{
  userLogin = true;
}

function checkUserLogin()
{
  if(userLogin === true)
  {
    document.getElementById("topnav-login-button").style.display = "none";
    document.getElementById("profile-button").style.display = "";
  }
  else
  {
    document.getElementById("topnav-login-button").style.display = "";
    document.getElementById("profile-button").style.display = "none";
  }
}

function toggleSignupForm()
{
  var x = document.getElementById("signup-container");
  var y = document.getElementById("login-container");

  if(y.style.display === "flex")
  {
    y.style.display = "none";
  }

  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myMap() {
  const singapore_loc_1 = { lat: 1.364106, lng: 103.930816 };
  const singapore_loc_2 = { lat: 1.384106, lng: 103.920816 };
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 10,
    center: singapore_loc_1
  });
  const marker1 = new google.maps.Marker({position: singapore_loc_1, map: map,});
  const marker2 = new google.maps.Marker({position: singapore_loc_2, map: map,});
}
