/**
 * title : 
 * auth : lsh
 * date : 2014. 11. 17. 오후 7:34:56
 * from :cnspay
 * @param myForm
 * example : <input type='text' name='acquDt'  value=''  maxlength='10' onkeyup='javascript:dateMaskOn(this)'>
 * 
 */
function dateMaskOn(myForm) {
	var maskedDate = "";

	myForm.value = getOnlyDigit(myForm.value);

	for (i = 0; i < myForm.value.length; i++) {
		maskedDate += myForm.value.charAt(i);

		if (i != myForm.value.length - 1 && (i == 3 || i == 5))
			maskedDate += "/";
	}
	myForm.value = maskedDate;
}


/**
 * title : return only digit
 * auth : lsh
 * date : 2014. 11. 17. 오후 7:36:23
 * from : cnspay
 * @param number
 * @returns {String}
 * example :
 * 
 */
function getOnlyDigit(number) {
	var i;
	var result = "";

	for (i = 0; i < number.length; i++) {
		if (number.charAt(i) >= '0' && number.charAt(i) <= '9')
			result += number.charAt(i);
	}

	return result;
}



/**
 * title : 오늘의 날짜 가져오기 
 * auth : lsh
 * date : 2014. 11. 17. 오후 7:40:50
 * from : cnspay
 * @returns
 * example :
 * 
 */
function getToDay(){	
	
	var now = new Date();		 
	var year 	= now.getFullYear()+"";
	var month = now.getMonth()+1;	
	var day = now.getDate()+"";
	
	var today;	
	
	if (day < 10) {
	  day = "0" + day;
	}
	
	if (month < 10){
  		today = year + "0" + month + day;			
	}else{
		today = year + month + day;			
	}
		
	return today;	
}

/* 오늘의 다음 가져오기 */
function getNextDay(){	
	
	today = new Date();
    ty = today.getFullYear();
    tm = today.getMonth()+1;
    td = today.getDate();
    
    if(tm < 10) tm = "0" + tm;
    if(td < 10) td = "0" + td;
    
    tomorrow = new Date(today.valueOf()+(24*60*60*1000));
    yy = tomorrow.getFullYear();
    ym = tomorrow.getMonth()+1;
    yd = tomorrow.getDate();
    
    if(ym < 10) ym = "0" + ym;
    if(yd < 10) yd = "0" + yd;
    
    nday = yy + '' + ym + '' + yd;
	  
	  return nday;	
}

/* 이벌달 가져오기 */
function getToMM(){	
	
	var now = new Date();		 
	var year 	= now.getFullYear()+"";
	var month = now.getMonth()+1;	
	
	var tomm;	
	
	if (month < 10){
  		tomm = year + "0" + month;			
	}else{
		tomm = year + month;			
	}
		
	return tomm;	
}
