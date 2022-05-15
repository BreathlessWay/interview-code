const longestValidParentheses = (s) => {
	const len = s.length,
		stack = [-1];

	let maxLen = 0;

	for (let i = 0; i < len; i++) {
		const item = s[i];

		if (item === "(") {
			stack.push(i);
		} else {
			stack.pop();
			if (stack.length === 0) {
				stack.push(i);
			} else {
				console.log(i - stack[stack.length - 1]);
			}
		}
	}

	console.log(stack);
};


longestValidParentheses("))()())");
