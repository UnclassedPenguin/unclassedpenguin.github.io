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

function setRandomLinkColor() {
  Array.from(document.getElementsByClassName("randomcolor")).forEach((item) => {
    item.style.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

function setRandomHeaderColor() {
	var r = document.querySelector(':root');
	r.style.setProperty('--rand', colors[Math.floor(Math.random() * colors.length)])
}

setRandomLinkColor();
setRandomHeaderColor();
