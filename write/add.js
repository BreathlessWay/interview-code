const add = (...args) => {
	return (...rest) => {
		if (rest.length) {
			return add(...rest, ...args);
		} else {
			return args.reduce((previousValue, currentValue) => {
				return previousValue + currentValue;
			});
		}
	};
};

console.log(add(1)(2)(3)());
console.log(add(1, 2)(3)());
