const customNew = (fn, ...args) => {
	const obj = Object.create({});

	obj.__proto__ = fn.prototype;

	const res = fn.apply(obj, args);

	return res instanceof Object ? res : obj;
};
