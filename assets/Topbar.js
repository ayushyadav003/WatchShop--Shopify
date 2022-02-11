function dismiss(val){
	val.parentNode.style.display='none';
  	document.cookie = "preference= 1;";
}
 
function checkCookie() {
  let user = getCookie("preference");
  if (user != "") {
    alert("Welcome again " + user);
  }