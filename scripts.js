/* Place your JavaScript in this file */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
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

function myMap() {
  const singapore = { lat: 1.364106, lng: 103.930816 };
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 10,
    center: singapore
  });
  const marker = new google.maps.Marker({position: singapore, map: map,});
}
