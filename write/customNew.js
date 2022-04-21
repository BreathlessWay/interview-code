const customNew = (fn, ...args) => {
	const obj = Object.create({});

	obj.__proto__ = fn.prototype;

	const res = fn.apply(obj, args);

	return typeof res === "object" && res !== null ? res : obj;
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
