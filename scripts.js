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

function contactMap() {
  const singapore_loc_1 = { lat: 1.364106, lng: 103.930816 };
  const singapore_loc_2 = { lat: 1.384106, lng: 103.920816 };
  const map = new google.maps.Map(document.getElementById("contact-googleMap"), {
    zoom: 10,
    center: singapore_loc_1
  });
  const marker1 = new google.maps.Marker({position: singapore_loc_1, map: map,});
  const marker2 = new google.maps.Marker({position: singapore_loc_2, map: map,});
}

function reservationMap() {
  const singapore_loc_1 = { lat: 1.364106, lng: 103.930816 };
  const singapore_loc_2 = { lat: 1.384106, lng: 103.920816 };
  const map = new google.maps.Map(document.getElementById("reservation-googleMap"), {
    zoom: 10,
    center: singapore_loc_1
  });
  const marker1 = new google.maps.Marker({position: singapore_loc_1, map: map,});
  const marker2 = new google.maps.Marker({position: singapore_loc_2, map: map,});
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