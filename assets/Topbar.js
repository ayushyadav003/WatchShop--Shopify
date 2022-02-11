function dismiss(val){
	val.parentNode.style.display='none';
  	document.cookie = "preference= 1; expires=sun; path=/";
}

function Pdismiss(val){
if (document.cookie.length > 0) {
  	val.parentNode.style.display='none';	
  }
}
 
