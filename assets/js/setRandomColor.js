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
                "#5EDFE4"]

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}


function setRandomLinkColor() {
  Array.from(document.getElementsByClassName("randomcolor")).forEach((item) => {
    item.style.color = getRandomColor();
  });
}

function getRandomHeaderColor() {
	var r = document.querySelector(':root');
	r.style.setProperty('--rand', colors[Math.floor(Math.random() * colors.length)])
}

//function getRandomColorHeader() {
	//var r = document.querySelector(':root');
	//var length = colors.length
	//var rand = Math.floor((Math.random() * length) + 0);
	//r.style.setProperty('--rand', colors[rand])
	//return colors[rand];
//}


setRandomLinkColor();
getRandomHeaderColor();
