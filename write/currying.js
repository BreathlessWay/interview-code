const currying = (fn, ...args) => {
	const funLen = fn.length,
		argsLen = args.length;

	if (funLen === argsLen) {
		return fn(...args);
	}

	return (...rest) => currying(fn, ...rest, ...args);
};

const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2, 3));
