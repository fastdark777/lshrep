/**
 * title : 특정 selct value 제거
 * auth : lsh
 * date : 2014. 11. 17. 오후 4:37:01
 * @param selName
 * @param optValue
 * 
 */
function delSelVal(selName, optValue) {
	// $("select[name='selReason'] option[value='99']").remove();
	$("select[name='" + selName + "'] option[value='" + optValue + "']")
			.remove();
}