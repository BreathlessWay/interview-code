// 爬楼梯 矩形覆盖 问题的变种

const fibonacci = (n, cache = [0, 1, 1]) => {
	if (n <= 2) {
		return cache[n];
	}

	if (!cache[n - 1]) {
		cache[n - 1] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
	}
	console.log(cache, n, cache[n - 1]);
	return cache[n - 1];
};

console.log(fibonacci(5));

// 尾调用优化
const fibImp = (a, b, n) => {
	if (n <= 1) {
		return a;
	}

	return fibImp(b, a + b, n - 1);
};
const fib = (n) => fibImp(0, 1, n);
// 尾调用优化
console.log(fib(5));

// 0 1 1 2 3 5
const fibonacciWhile = (n) => {
	if (n <= 1) {
		return n;
	}

	let res = 0,
		pre = 1;

	while (n > 1) {
		let mid = res;
		res = pre + res;
		pre = mid;
		n--;
	}

	console.log(res);
};

fibonacciWhile(5);
