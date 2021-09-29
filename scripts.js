function drop() {
	document.getElementById("topnav").style.height = "200px";
	document.getElementById("arrow").style.top = "70px";
	document.getElementById("arrow").onclick = rise;
}
function rise() {
	document.getElementById("topnav").style.height = "130px";
	document.getElementById("arrow").style.top = "0px";
	document.getElementById("arrow").onclick = drop;
}
function scroll_to_top() {
	window.scrollTo(%50, 0);
}