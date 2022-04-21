const currying = (fn, ...args) => {
	const fnLen = fn.length,
		argLen = args.length;

	if (fnLen > argLen) {
		return (...rest) => currying(fn, ...rest, ...args);
	}
	if (fnLen === argLen) {
		return fn.apply(this, args);
	}
};

const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2, 3));
