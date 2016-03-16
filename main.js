
/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is referencing the Window object
// * because it has not been defined in the function.




// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is referencing the Window object
// * because the function is being called on the window object.




// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is the "inAnObject" object
// * because 'test1' is the method it references.




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is not accessed
// * because 'test1' cannot be referenced because it exists outside of the 'another object' object.




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is the 'anotherObject' object inside the 'inAnObject' object
// * because 'test2' is a method inside the 'anotherObject' object.




// * Problem 6
// whatIsThis.call();
// * "this" is referencing the window object
// * because no argument is passed in, which leaves it to return 'undefined'.




// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is the "trickyTricky" object
// * because that object is passed into .call() as an value.




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is the "trickyTricky" object
// * because the same thing is happening as in question 7, but with the optional arguments, "nice" and "job" passed through.




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is the "confusing" object
// * because that object is passed into .call() as a value.



// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is the "confusing" object
// * because the same thing is happening as in question 9, but with the optional argument, "hello" passed through.




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is the "trickyTricky" object
// * because that object is passed into .apply() as a value.




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is this is the 'confusing' object
// * because that object is passed into .apply() as a value with the "nice" and "job" applied as one array passed in as 2 arguments. 




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is not accessed
// * because the second .apply() argument should be passed in as an array.




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is the window object
// * because it has not been defined.




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is is not accessed
// * because test3 is not a function.




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is the window object
// * because it's parent object is not defined.




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is the window object on the top line, and the in inAFunction object on the second line
// * because it's parent object is redifined and then recalled.




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is the trickyTricky object
// * because .call() passes the trickyTricky object into test1, which "this" is referencing.




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is the 'confusing' object
// * because .apply() passes the trickyTricky object into test1, which "this" is referencing.
