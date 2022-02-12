function dismiss(val){
	val.parentNode.style.display='none';
  	document.cookie = "preference= 1; expires=Sunday, February 13";
  
}

const allcookie = document.cookie.split(';').map(cookie => cookie.split('='))
			.reduce((accumulator, [key, value]) =>({...accumulator,
             [key.trim()]:decodeURIComponent(value) }), {});

 