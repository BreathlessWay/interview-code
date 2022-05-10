const customNew = (fn, ...args) => {
	const obj = {}; // 创建空对象

	obj.__proto__ = fn.prototype;  // 设置对象原型

	const res = fn.apply(obj, args);  // 执行函数，绑定this到对象

	return typeof res === "object" && res ? res : obj;  // 返还
};

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.say = function () {
	console.log(this.age);
};
let p1 = customNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();
