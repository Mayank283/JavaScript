/**
 * Closures - A closure is a function having access to the parent scope, even
 * after the parent function has closed.
 * 
 * They provide a way to create private access modifiers in Javascript by
 * implementing nested function.
 */

/**
 * Let's consider a POJO in Java as
 * 
 * class Person{
 * 
 * constructor->
 * 
 * public Person(){ }
 * 
 * private String firstName;
 * 
 * private String lastName;
 * 
 * getters & setters }
 * 
 * So how can we implement above class in Javascript. Ans: Using functions and
 * closures. Since their is no concept of classes in Javascript we have to use
 * functions in it to give a feel of a class.
 * 
 * Constructor can be created in javascript using new operator.This is to just
 * return an object. Constructors will be parametrised.
 * 
 * To create firstName and lastName as private we use closures.
 */

// creating private access modifier using closure
function createPerson() {

	// Scope of below 2 variables is inside createPerson() only hence are not
	// global.Thus they act as private and are only accessible via returnObject
	var firstName;
	var lastName;

	var returnObject = {

		'getFirstName' : function() {
			return firstName;
		},

		'getLastName' : function() {
			return lastName;
		},

		'setFirstName' : function(name) {
			firstName = name;
		},

		'setLastName' : function(name) {
			lastName = name;
		}
	}

	return returnObject;
}

//firstName and lastName of person object are not accessible directly to the outerworld.
var person = createPerson();
person.setFirstName("Mayank");
person.setLastName("Agarwal");
console.log(person.getFirstName());
console.log(person.getLastName());

// creating object using new keyword. considered as constructor for object
function student() {
	this.name = "Mayank";
	this.roll = 10283;
}

var ob = new student();
console.log(ob);

// creating object without new keyword
function child() {
	var children = {};
	children.name = "SitaRam";
	children.roll = 10284;
	return children;
}

var children = child();
console.log(children);

