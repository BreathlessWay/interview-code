const fibonacci = (n, cache = []) => {
	if (n < 2) {
		return n;
	}

	if (!cache[n]) {
		cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
	}

	return cache[n];
};

console.log(fibonacci(5));
// 1 1 2 3 5
const fibonacciWhile = (n) => {
	let res = 1,
		pre = 1;

	while (n > 2) {
		let mid = res
		res = pre + res;
		pre = mid;
		n--;
	}

	console.log(res);
};

fibonacciWhile(3);
