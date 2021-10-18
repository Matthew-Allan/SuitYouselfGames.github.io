window.addEventListener('resize', move_menu_buttons);
window.addEventListener('load', set_topnav_height)
window.addEventListener('load', move_menu_buttons)
function set_topnav_height(){
	if (window.innerHeight > window.innerWidth) {
		topnavHeight = "310px";
	}
	else {
		topnavHeight = "230px";
	}
}
function toggle() {
	if (document.getElementById("topnav").style.height == topnavHeight){
		document.getElementById("topnav").style.height = "130px";
	}
	else {
		document.getElementById("topnav").style.height = topnavHeight;
	}
}
function scroll_to_top() {
	window.scrollTo(0, 0);
}
function move_menu_buttons() {
	if (window.innerHeight > window.innerWidth) {
		console.log("Mobile");
		if (document.getElementById("topnav").style.height == topnavHeight){
			document.getElementById("topnav").style.height = "310px";
		}
		topnavHeight = "310px";
		if (document.getElementById("leftButton") != null){
			document.getElementById("leftButton").id = "topButton"
			document.getElementById("rightButton").id = "bottomButton"
			document.getElementById("topButton").className = "menuLinkMobile"
			document.getElementById("bottomButton").className = "menuLinkMobile"
		}
	}
	else {
		console.log("PC");
		if (document.getElementById("topnav").style.height == topnavHeight){
			document.getElementById("topnav").style.height = "230px";
		}
		topnavHeight = "230px";
		if (document.getElementById("topButton") != null){
			document.getElementById("topButton").id = "leftButton"
			document.getElementById("bottomButton").id = "rightButton"
			document.getElementById("leftButton").className = "menuLink"
			document.getElementById("rightButton").className = "menuLink"
		}
	}
}
