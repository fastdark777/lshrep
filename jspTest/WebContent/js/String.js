
/**
 * title : 숫자 여부 확인 
 * auth : lsh
 * date : 2014. 11. 17. 오후 7:39:13
 * from : cnspay
 * @param check
 * @returns {Boolean}
 * example :
 * 
 */
function isDigit(check){
	var c;
	c = check.charAt(0);
	
	if( ! (c >= '0' && c <= '9') ){
		return false;
	}

	for(i=1; i<check.length; i++){
		c = check.charAt(i);		

		if( !(c >= '0' && c <= '9') ){
			return false;
		}
	}
	return true;
}