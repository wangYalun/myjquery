/*
面向对象(OOP)的语言都有一个特点，它们都会有类的这一概念，通过类可以抽象出创建具体相同方法与属性的对象。
但是ECMAScript中是没有类的概念的，因此它的对象与基于类的语言如java的定义是有所不同的。

在JavaScript世界中函数作为“一等公民”，它不仅拥有一切传统函数的使用方式（声明和调用），
而且可以做到像简单值一样赋值、传参、返回，这样的函数也称之为第一级函数。不仅如此，而且还可以通过操作符new来充当类的构造器。

函数在充当类的构造器时，原型prototype是一个重要的概念。
prototype是构造函数的一个属性, 该属性指向一个对象。
而这个对象将作为该构造函数所创建的所有实例的基引用(base reference), 可以把对象的基引用想像成一个自动创建的隐藏属性。 
当访问对象的一个属性时, 首先查找对象本身, 找到则返回；若不, 则查找基引用指向的对象的属性(如果还找不到实际上还会沿着原型链向上查找,  直至到根)。 
只要没有被覆盖的话, 对象原型的属性就能在所有的实例中找到。
*/

function Person(){
	if(!(this instanceof Person)){
		return new Person();
	}
	this.name='Allen';
	this[0]='Allen';
	return this;
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

var length=34&&0&&'fsf';
console.log(length);
var arr=new Array();
console.log({}.toString.call(arr));
console.log(typeof isArrayLike);
console.log('Boolean Number String Function Array Date RegExp Object Error Symbol');


function taskNums(num){

	function add(a,b){
		return a+b;
	}

	return function(a,b){
		if(num==5){
			return add(a,b)	
		}	
	}
}

var fun=taskNums(5);
console.log(fun(4,6));

