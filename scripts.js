window.addEventListener('resize', toggle);
function toggle() {
	if (document.getElementById("topnav").style.height = "130px"){
		document.getElementById("topnav").style.height = "230px";
	}
	else {
		document.getElementById("topnav").style.height = "130px";
	}
}
function scroll_to_top() {
	window.scrollTo(0, 0);
}
