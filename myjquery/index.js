/*
*立即调用表达式
*任何库与框架设计的第一个要点就是解决命名空间与变量污染的问题。
*jQuery就是利用了JavaScript函数作用域的特性，采用立即调用表达式包裹了自身的方法来解决这个问题。
*/

(function(window,undefined){
var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};

var $=jQuery=function(selector){
	return new jQuery.fn.init(selector);
}

jQuery.prototype.init=function(selector){
	// var elem=document.getElementById(/[^#].*/.exec(selector)[0]);
	var it=this;
	var elem=document.querySelectorAll(selector);
	console.log(elem);
	jQuery.each(elem,function(i,item){
		it[i]=item;
	});
	this.length=elem.length;
	this.selector=selector;
}
//静态方法和实例方法共享设计
jQuery.fn=jQuery.prototype;
// jQuery.fn=jQuery.prototype={
// 	jquery:'version-allen',
// 	length:0,
// 	constructor:jQuery,
// 	selector:'',
// 	each:function(callback){
// 		return jQuery.each(this,callback);
// 	}
// }




jQuery.fn.init.prototype=jQuery.fn;


//插件接口设计
jQuery.extend=jQuery.fn.extend=function(){
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
}

jQuery.extend({
	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},
	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},
	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},
	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
});

jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length, //true

		type = jQuery.type( obj ); //object
	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}
	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

var $div=$('#haha');
console.log('----');
console.log($div);
var $ul=$('#ul li');
console.log($ul);
console.log(jQuery.type($div));
console.log(isArrayLike($div));
console.log({}.toString.call($div));

// var rnotwhite = ( /\S+/g );



// // Convert String-formatted options into Object-formatted ones
// function createOptions( options ) {
// 	var object = {};
// 	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
// 		object[ flag ] = true;
// 	} );
// 	return object;
// }

// console.log(createOptions('once memoery'));

	
	// 核心方法
	// 回调系统
	// 异步队列
	// 数据缓存
	// 队列操作
	// 选择器引
	// 属性操作
	// 节点遍历
	// 文档处理
	// 样式操作
	// 属性操作
	// 事件体系
	// AJAX交互
	// 动画引擎
window.$=window._$=window.jQuery=jQuery;
})(window);




