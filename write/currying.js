const currying = (fn, ...args) => {
	const funLen = fn.length,
		argLen = args.length;
	if (argLen < funLen) {
		return (...rest) => {
			return currying(fn, ...args, ...rest);
		};
	} else {
		return fn(...args);
	}
};

const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3))
