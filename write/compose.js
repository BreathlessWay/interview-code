const compose = (...args) => {
	if (!args.length) return v => v;
	return (...rest) => {
		if (args.length === 1) return args[0].apply(this, rest);

		return args.reduce(((previousValue, currentValue) => {
			return typeof previousValue === "function" ? currentValue(previousValue(...rest)) : currentValue(previousValue);
		}));
	};
};

function fn1(x) {
	return x + 1;
}

function fn2(x) {
	return x * 10;
}

function fn3(x) {
	return x - 1;
}

let x = 10;
let result = compose(fn3, fn2, fn1, fn3, fn2, fn1);

console.log(result);

console.log(result(x));
