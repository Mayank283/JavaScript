/**
 * 
 */

var i;

/*var print = function() {
	console.log(i);
}*/

for (i = 0; i < 10; i++) {
	var f = (function() {
		var x = i;
		var print = function() {
			console.log(x);
		}
		return print;
	})(); 
	setTimeout(f, i*1000);// -> here print is a callback function
}