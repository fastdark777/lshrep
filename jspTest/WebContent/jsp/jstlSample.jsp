<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- choose -->
	<c:choose>
		<c:when test="${result.reason=='00' && result.status=='0'}">
			<td align="center"><input type='button' name='' value='해 제'
				onclick="javascript:setLayShow(event.x-250,event.y + document.body.scrollTop, '${result.seq}');"
				class="pptnL03a"></td>
		</c:when>
		<c:when test="${result.reason=='00' && result.status=='1'}">
			<td class="rTblA" align="center">해제완료</td>
		</c:when>
		<c:otherwise>
			<td class="rTblA" align="center">&nbsp;</td>
		</c:otherwise>
	</c:choose>
</body>
</html>