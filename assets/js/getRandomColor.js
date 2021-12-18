const colors = ["#81EF9E",
		"#9E81EF",
		"#EF9E81",
		"#EF81D2",
		"#D581EF",
		"#81EFD5",
		"#81D2EF",
		"#CB98EB",
		"#98B8EB"];


function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}


function setRandomLinkColor() {
  Array.from(document.getElementsByClassName("randomcolor")).forEach((item) => {
    item.style.color = getRandomColor();
  });
}


function getRandomColorHeader() {
	var r = document.querySelector(':root');
	var length = colors.length
	var rand = Math.floor((Math.random() * length) + 0);
	r.style.setProperty('--rand', colors[rand])
	return colors[rand];
}


setRandomLinkColor();
getRandomColorHeader();
