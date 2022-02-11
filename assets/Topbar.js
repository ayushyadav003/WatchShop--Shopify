function dismiss(val){
	val.parentNode.style.display='none';
  	document.cookie = "preference= 1; expires=sun; path=/";
}

function Pdismiss(val){
  if(getCookie('preference') != null){
  	val.parentNode.style.display='none';	
  }
}
 
