const dec2bin = (num) => {
	let res = "";

	const stack = [];
	while (num) {
		stack.push(num % 2);
		num = Math.floor(num / 2);
	}

	while (stack.length) {
		res += stack.pop();
	}
	console.log(res);
};

dec2bin(10);
