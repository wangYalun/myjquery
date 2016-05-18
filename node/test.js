function Person(){
	if(!(this instanceof Person)){
		return new Person();
	}
	this.name='Allen';
	this[0]='Allen';
}

Person.prototype.__protoName='ALLEN';
Person.prototype.__fun=function(){
	console.log(this.name);
}
var a=Person();
var b=new Person();


function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length;
	// 	type = jQuery.type( obj );

	// if ( type === "function" || jQuery.isWindow( obj ) ) {
	// 	return false;
	// }
	console.log(length===0);
	// return type === "array" || length === 0 ||
	// 	typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

isArrayLike(a);

var arr=new Array();
console.log({}.toString.call(arr));

console.log('name' in a);