const currying = (fn, ...args) => {
	const fnLen = fn.length,
		argLen = args.length;

	if (fnLen === argLen) {
		return fn(...args);
	} else {
		return (...rest) => currying(fn, ...args, ...rest);
	}
};

const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2, 3));
