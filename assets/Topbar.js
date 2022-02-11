function dismiss(val){
	val.parentNode.style.display='none';
  	document.cookie = "preference= 0; expires=Sunday, February 13";
  
}

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('preference='))
  .split('=')[1];
 
