function bargraph() {
	// body...
	 n = document.getElementById('newcases').text;
	console.log(n);
}
function loaddate(argument) {
	// body...
	var today = new Date();

	var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
	document.getElementById('currentdate').innerHTML = date;
	console.log(date);
}