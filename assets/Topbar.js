function dismiss(val){
	val.parentNode.style.display='none';
  	document.cookie = "preference= 1; expires=Sunday";
}

let allcookie = document.cookie.split(';').map(cookie => cookie.split('='))
			.reduce((accumulator, [key, value]) =>({...accumulator,
             [key.trim()]:decodeURIComponent(value) }), {});

if(allcookie.preference != 1){
	document.getElementsByClassName("announcement-parentbar")[0].style.display="flex";
}