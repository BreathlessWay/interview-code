const add = (...args) => {
	return (...rest) => {
		if (rest.length) {
			return add(...args, ...rest);
		}

		return args.reduce((a, b) => a + b);
	};
};

console.log(add(1)(2)(3)());
console.log(add(1, 2)(3)());
