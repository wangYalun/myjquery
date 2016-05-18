//为了更好理解jQuery，简化模型.
var A={
	init:function(){
		console.log('这是初始化');
		return this;
	},
	fun1:function(){
		console.log('这是方法1');
		return this;
	},
	fun2:function(){
		console.log('这是方法2');
		return this;
	}
}

//我们创建的每一个函数都有一个prototype（原型）属性，这个属性是一个指针，
//指向一个对象，这个对象包含由该构造函数创建的所有实例共享的属性和方法。
A.init.prototype=A;
//初始化对象,就是将A中的init 方法作为构造函数。
var instance_a=new A.init();

console.log(instance_a);



//将A赋值给A.init 的原型，所以instance_a 就可以使用A的属性和方法。

//使用实例方法
instance_a.fun1(); // 这是方法1
instance_a.init(); // 这是初始化


//这样做的目的就是为了让实例方法和静态方法共享。

//使用静态方法
A.fun1(); // 这是方法1
A.init(); // 这是初始化


//链式调用

A.fun1().init().fun2();

instance_a.init().fun1();


//扩展
A.extend=function(){
	var options,src,copy,
		target = arguments[0]||{},
		i=1,
		length = arguments.length;

	if(i===length){
		target=this;
		i--;
	}
	for(;i<length;i++){
		if((options = arguments[i])!=null){
			for(name in options){
				copy = options[name];
				target[name]=copy;
			}
		}
	}
	return target;
}

A.extend({
	setName:function(name){
		this.name=name;
		return this;
	},
	getName:function(){
		console.log(this.name);
		return this;
	}
});

A.setName('Allen').getName();

var instance_b=new A.init();

instance_b.setName('wang').getName();

function merge(first,second){
	var len=+second.length;
	console.log(len);
}












