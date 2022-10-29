/* Place your JavaScript in this file */
//sessionStorage.setItem('userLogin', 'false')

window.addEventListener ? 
window.addEventListener("load",checkUserLogin,false) : 
window.attachEvent && window.attachEvent("onload", checkUserLogin);

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
  sessionStorage.setItem('userLogin', 'true')
  checkUserLogin();
}

function checkUserLogin()
{
  let x = sessionStorage.getItem('userLogin');
  if(x === 'true')
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

function validateLogin() {
  var email = document.forms["loginForm"]["email"].value;

  var password = document.forms["loginForm"]["password"].value;

  if (email == "") {
    alert("Email cannot be empty");
    return false;
  }

  if (password == "") {
    alert("Password cannot be empty");
    return false;
  }

  if (email != "johntan@mymail.com") {
    alert("Incorrect email");
    return false;
  }

  if (password != "Password@1234") {
    alert("Incorrect password");
    return false;
  }
}

function validatePayment() {
  var name = document.forms["paymentForm"]["cardname"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  var number = document.forms["paymentForm"]["cardnumber"].value;
  if (number == "") {
    alert("Credit card number must be filled out");
    return false;
  }
  var month = document.forms["paymentForm"]["expmonth"].value;
  if (month == "") {
    alert("Date must be filled out");
    return false;
  }
  var year = document.forms["paymentForm"]["expyear"].value;
  if (year == "") {
    alert("Date must be filled out");
    return false;
  }
  var cvv = document.forms["paymentForm"]["cvv"].value;
  if (cvv == "") {
    alert("CVV must be filled out");
    return false;
  }
}

function contactMap() {
  const singapore_loc_1 = { lat: 1.364106, lng: 103.930816 };
  const singapore_loc_2 = { lat: 1.384106, lng: 103.920816 };
  const map = new google.maps.Map(document.getElementById("contact-googleMap"), {
    zoom: 13,
    center: singapore_loc_1
  });
  const marker1 = new google.maps.Marker({position: singapore_loc_1, map: map,});
  google.maps.event.addListener(marker1,'click',function() {   
    selectMarker(marker1, map);
  });
  const marker2 = new google.maps.Marker({position: singapore_loc_2, map: map,});
  google.maps.event.addListener(marker2,'click',function() {   
    selectMarker(marker2, map);
  });
}

function reservationMap() {
  const singapore_loc_1 = { lat: 1.364106, lng: 103.930816 };
  const singapore_loc_2 = { lat: 1.384106, lng: 103.920816 };
  const map = new google.maps.Map(document.getElementById("reservation-googleMap"), {
    zoom: 13,
    center: singapore_loc_1
  });
  const marker1 = new google.maps.Marker({position: singapore_loc_1, map: map,});
  const marker2 = new google.maps.Marker({position: singapore_loc_2, map: map,});
}

function locationSelect()
{
  var selection = document.getElementById("location-selection").value;
  const singapore_loc_1 = { lat: 1.364106, lng: 103.930816 };
  const singapore_loc_2 = { lat: 1.384106, lng: 103.920816 };

  const map = new google.maps.Map(document.getElementById("reservation-googleMap"), {
    zoom: 13,
    center: singapore_loc_1
  });
  const marker1 = new google.maps.Marker({position: singapore_loc_1, map: map,});
  const marker2 = new google.maps.Marker({position: singapore_loc_2, map: map,});
  if(selection === "location-1")
  {
    console.log("test");
    selectMarker(marker1, map);
  }
  else if(selection === "location-2")
  {
    selectMarker(marker2, map);
  }
}

function selectMarker(marker, map) {
  map.setZoom(16);
  map.setCenter(marker.getPosition());
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#from-date");
var checkoutElem = document.querySelector("#until-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}