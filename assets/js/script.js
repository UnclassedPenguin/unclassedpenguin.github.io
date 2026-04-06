//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Change Cover Background
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


function changeBackground() {

  var background = document.getElementById("backgroundDiv");
  if (background) {
    var style = window.getComputedStyle(background),
        value = style.getPropertyValue('background-image');
  }
  var lastTen = value.slice(value.length - 10);

  if (lastTen == 'Shop.jpg")') {
    document.getElementById("backgroundDiv").style.backgroundImage = 'url("https://tvkforge.com/assets/images/Skybackground.jpg")';
  } else if (lastTen == 'ound.jpg")') {
    document.getElementById("backgroundDiv").style.backgroundImage = 'url("https://tvkforge.com/assets/images/NightShop.jpg")';
  }
}

function nextImage() {
  setInterval(changeBackground, 6000);
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//Change Cover Background End
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Scroll to Top
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//Get the button:
mybutton = document.getElementById("myBtn");
myDiv = document.getElementById("topDiv");
scrollDiv = document.getElementById("scrollDiv");

 //When the user scrolls down 80px from the top of the document, show the button
//myDiv.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((scrollDiv.scrollTop > 80) && (scrollDiv.scrollHeight - scrollDiv.scrollTop !== scrollDiv.clientHeight)) { 
    //mybutton.style.display = "block";
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = 1;
  } else {
    //mybutton.style.display = "none";
    mybutton.style.opacity = 0;
    mybutton.style.visibility = "collapse";
  }
}

 //When the user clicks on the button, scroll to the top of the document
function topFunction() {
  myDiv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// End Scroll to Top
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Set Random Colors
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

const colors = ["#81EF9E",
                "#9E81EF",
                "#EF9E81",
                "#EF81D2",
                "#D581EF",
                "#81EFD5",
                "#81D2EF",
                "#CB98EB",
                "#98B8EB",
                "#57FF73",
                "#7357FF",
                "#F18A65",
                "#65F18A",
                "#4CF679",
                "#71E5DB",
                "#E5717A",
                "#559EE2",
                "#58E255",
                "#5EE4A5",
                "#5EDFE4"];

function setRandomLinkColor() {
  Array.from(document.getElementsByClassName("randomcolor")).forEach((item) => {
    item.style.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

function setRandomHeaderColor() {
  var r = document.querySelector(":root");
  r.style.setProperty("--rand", colors[Math.floor(Math.random() * colors.length)]);
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Set Random Colors End
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Call Functions
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


// Set random Colors
setRandomLinkColor();
setRandomHeaderColor();


// Change background
//nextImage();
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Call Functions End
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
