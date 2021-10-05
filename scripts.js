window.addEventListener('resize', toggle);
function toggle() {
	if (document.getElementById("topnav").style.height == "230px"){
		document.getElementById("topnav").style.height = "130px";
		console.log(document.getElementById("topnav").style.height);
	}
	else {
		console.log("down");
		document.getElementById("topnav").style.height = "230px";
	}
}
function scroll_to_top() {
	window.scrollTo(0, 0);
}
