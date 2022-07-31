function webdev() {
  var div = document.querySelectorAll(".div-webdev");
  var glow = document.getElementById('web1');
  for (var i = 0; i < div.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = div[i].getBoundingClientRect().top;
    var elementBottom = div[i].getBoundingClientRect().bottom;
    var elementVisible = 500;
    var elementVisibleBottom = 500;
    if (elementTop > windowHeight - elementVisible) {
      glow.style.color = "white";
    }
    if (elementTop < windowHeight - elementVisible) {
      glow.style.color = "yellow";
    }
    if (elementBottom < windowHeight - elementVisibleBottom) {
      glow.style.color = "white";
    }
  }
}
function opengl() {
  var div = document.querySelectorAll(".div-opengl");
  var glow = document.getElementById('opengl1');
  for (var i = 0; i < div.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = div[i].getBoundingClientRect().top;
    var elementBottom = div[i].getBoundingClientRect().bottom;
    var elementVisible = 500;
    var elementVisibleBottom = 500;
    if (elementTop > windowHeight - elementVisible) {
      glow.style.color = "white";
    }
    if (elementTop < windowHeight - elementVisible) {
      glow.style.color = "yellow";
    }
    if (elementBottom < windowHeight - elementVisibleBottom) {
      glow.style.color = "white";
    }
  }
}

function javafx() {
  var div = document.querySelectorAll(".div-javafx");
  var glow = document.getElementById('javafx1');
  for (var i = 0; i < div.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = div[i].getBoundingClientRect().top;
    var elementBottom = div[i].getBoundingClientRect().bottom;
    var elementVisible = 500;
    var elementVisibleBottom = 500;
    if (elementTop > windowHeight - elementVisible) {
      glow.style.color = "white";
    }
    if (elementTop < windowHeight - elementVisible) {
      glow.style.color = "yellow";
    }
    if (elementBottom < windowHeight - elementVisibleBottom) {
      glow.style.color = "white";
    }
  }
}

window.addEventListener("scroll", webdev);
window.addEventListener("scroll", opengl);
window.addEventListener("scroll", javafx);
window.addEventListener("resize", checkResponsive);

window.onload = function () {
  typing();
  var first = document.getElementsByClassName("first");
  for (var i = 0; i < first.length; i++) {
    first[i].style.marginLeft = "0";
  }
  document.getElementById('id1').style.backgroundColor = "rgb(52, 224, 224)";
  document.getElementById('id2').style.backgroundColor = "transparent";
  document.getElementById('id3').style.backgroundColor = "transparent";
}
function sliderBtn1() {
  document.getElementById('id1').style.backgroundColor = "rgb(52, 224, 224)";
  document.getElementById('id2').style.backgroundColor = "transparent";
  document.getElementById('id3').style.backgroundColor = "transparent";
  var first = document.getElementsByClassName("first");

  for (var i = 0; i < first.length; i++) {
    first[i].style.marginLeft = "0";
  }
}

function sliderBtn2() {
  var windowWidth = window.innerWidth;
  document.getElementById('id1').style.backgroundColor = "transparent";
  document.getElementById('id2').style.backgroundColor = "rgb(52, 224, 224)";
  document.getElementById('id3').style.backgroundColor = "transparent";
  var first = document.getElementsByClassName("first");
  if (windowWidth <= 800) {
    for (var i = 0; i < first.length; i++) {
      first[i].style.marginLeft = "-28em";
    }
  } else if (windowWidth > 400 && windowWidth <= 800) {
    for (var i = 0; i < first.length; i++) {
      first[i].style.marginLeft = "-38em";
    }
  }
  else {
    for (var i = 0; i < first.length; i++) {
      first[i].style.marginLeft = "-68em";
    }
  }
}
function sliderBtn3() {
  var windowWidth = window.innerWidth;
  document.getElementById('id1').style.backgroundColor = "transparent";
  document.getElementById('id2').style.backgroundColor = "transparent";
  document.getElementById('id3').style.backgroundColor = "rgb(52, 224, 224)";
  var first = document.getElementsByClassName("first");
  if (windowWidth <= 400) {
    for (var i = 0; i < first.length; i++) {
      first[i].style.marginLeft = "-56em";
    }
  }
  else if (windowWidth > 400 && windowWidth <= 800) {
    for (var i = 0; i < first.length; i++) {
      first[i].style.marginLeft = "-76em";
    }
  } else {
    for (var i = 0; i < first.length; i++) {
      first[i].style.marginLeft = "-136em";
    }
  }
}

var i = 0, k = 0;
var text = "Hey! I'm Waldemar Justus";
var text2 = "Currently studying computer visualistics and design";

function typing() {
  if (i < text.length) {
    document.getElementById("typingtext").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  } else {
    typing2();
  }
  return;
}
function typing2() {
  if (k < text2.length) {
    document.getElementById("typingtext2").innerHTML += text2.charAt(k);
    k++;
    setTimeout(typing2, 80);
  }
}

function menuResponsive() {
  var menuhide = document.querySelectorAll(".menu-hide");
  var menu = document.querySelectorAll(".menu");
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].style.height == "60px") {
      menu[i].style.height = "200px";
    } else {
      menu[i].style.height = "60px";
    }
  }

  for (var i = 0; i < menuhide.length; i++) {
    if (menuhide[i].style.display == "none" && menu[0].style.height == "200px") {
      menuhide[i].style.display = "flex";
      menuhide[i].style.flexDirection = "column";
    } else {
      menuhide[i].style.display = "none";
    }
  }
}

function checkResponsive() {
  var menuhide = document.querySelectorAll(".menu-hide");
  var menu = document.querySelectorAll(".menu");
  if (window.innerWidth > 1100) {
    for (var i = 0; i < menuhide.length; i++) {
      menuhide[i].style.display = "flex";
      menuhide[i].style.flexDirection = "row";
      menu[0].style.height = "60px";
    }
  } else {
    for (var i = 0; i < menuhide.length; i++) {
      menuhide[i].style.display = "none";
      menu[0].style.height = "60px";
    }
  }
  if (window.innerWidth > 400 && window.innerWidth < 500) {
    sliderBtn1();
  }
  if (window.innerWidth > 800) {
    sliderBtn1();
  }
}

var btn3 = document.getElementById("radio3");
var btn4 = document.getElementById("radio4");
var btn5 = document.getElementById("radio5");


/*function reveal() {
  var reveals = document.querySelectorAll(".divider2");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active-div");
    } else {
      reveals[i].classList.remove("active-div");
    }
  }
}*/
