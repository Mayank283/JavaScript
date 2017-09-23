/**
 * 
 * Javascript is an object based programing.
 * It is both a compilation(scope chain is created in this phase) and interpretation(values are assigned using scope in this phase) language.
 * Javascript is single threaded.(Hence event cycle is used)
 * Javascript was standardised by ECMA international for cross browser compatibility and hence now it's ECMAScript.
 * Current version is ECMAScript-2015(formerly ES6)
 * TypeScript simply provides types to variable and warns us against error that would have been missed otherwise
 * ECMAScript-2015 Features: 
 * Classes, Maps, Sets, arrow functions, import&export keywords, let and blockscoping functions, constants etc.
 * More on ES6 features: http://es6-features.org
 * 
 * 
 * Why transpiler? Since every browser uses its own javascript engine hence today we cannot directly write ES6/TypeScript etc. 
 * So better way is to transpile ES6 to ES5 which is long accepted and runs on everybrowser.
 * More on transpiler here: https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them
 * 
 * Topics on ES5
 * 1. variable scopes(use IIFE) and closures(what problem it solves?Ans. creating public and private var),strict mode.
 * 2. objects and prototype.(vanilla JS)
 * 3. callback functions
 * 4. Constructor in javascript(new keyword) and difference between constructor and functions.
 * 5. type coersion/conversion, ===(right way of comparing both value and type) and ==(not a better way as type coersion occurs) 
 * 6. How to create classes and limit variable scope using function in javascript.
 * 7. this keyword in javascript.
 * 
 * javascript can bind itself to DOM events like mousehover,onclick etc. 
 * In angular it is called event binding.
 * 
 */


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/** ADT in javascript */

var array1 = [ 'name', 'mayank', 'agarwal' ];
var array2 = new Array("value1", "value2"); // ECMAScript-2015
var array3 = new Array();
console.log(array1);
console.log(array2);
console.log(array3);
iterate(array1);
console.log();
function iterate(array) {
	for (i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

console.log();
var map = new Map(); // ECMAScript-2015
console.log("printing map: " + map);

var set = new Set(); // ECMAScript-2015
console.log("printing set: " + set);
console.log();


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/**
 * 'a' will be available inside function as well(Global scope). So to limit
 * 'a'scope we use function(IIFE). Using global variable is a bad practice and
 * must not be done unless heavily required. A global object is a window object
 * and hence window will contain global value unless it is closed. This causes
 * the problem with the global object.
 */
var a = 5;

/** c remains undefined and not null */
var c;
console.log("undefined global C: " + c);

/** IIFE */
(function () {
	var b = 6;// b-> is available only inside the function.
	var c = 7;// c-> different from global c
	console.log("value of global a from function: " + a);
})();
console.log();

// callback function
function method(message, callback) {
	console.log();
	console.log("callback will be called after i am done!!");
	callback(message);
}


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/** An object can contain variables,array,maps,set,functions,other objects */
var object = {
	'varname1' : 'obj-value1',
	'varname2' : 'obj-value2',
	'array-name' : [ 'it is', 'an', 'array' ],
	'funcname' : function() {
		console.log('Hi from named function!!!');
	},
	// bounds this function with var named 'function' in the window object
	// during compilation step.
	function() {
		console.log('Hi from un-named function!!!');
	}
};

console.log(object['varname1']);
console.log(object.varname2);
console.log(object['array-name']);
console.log(object['funcname']);
object['funcname']();
object['function']();

method(object, function(message) {
	console.log("inside callback");
	console.log(message);
});

var meth = function() {
	console.log("Hi!!!");
	return 890;
}

console.log();
console.log(meth());
console.log();


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/