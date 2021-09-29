function drop() {
	document.getElementById("topnav").style.height = "230px";
	document.getElementById("menuButton").onclick = rise;
}
function rise() {
	document.getElementById("topnav").style.height = "130px";
	document.getElementById("menuButton").onclick = drop;
}
function scroll_to_top() {
	window.scrollTo(0, 0);
}
