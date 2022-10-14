/* Place your JavaScript in this file */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myMap() {
  var mapProp= {
    center: singapore,
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  const marker = new google.maps.Marker({position: singapore});

marker.setMap(map);
  }
