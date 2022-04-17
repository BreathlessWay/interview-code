const generateParenthesis = (n) => {
	if (!n) return [];
	let res = [];
	const dfs = (path = "", open = 0, close = 0) => {
		if (open > n || close > open) return; // 剪枝
		if (path.length === n * 2) {
			res.push(path);
			return;
		}

		dfs(path + "(", open + 1, close);
		dfs(path + ")", open, close + 1);
	};

	dfs();
	console.log(res);
};

generateParenthesis(3);

const generateParenthesis1 = (n) => {
	if (!n) return [];
	let res = [];
	const dfs = (str, left, right) => {
		if (left === 0 && right === 0) {
			res.push(str);
			return;
		}

		if (left === right) {
			dfs(str + "(", left - 1, right);
		}
		if (left < right) {
			if (left > 0) {
				dfs(str + "(", left - 1, right);
			}
			dfs(str + ")", left, right - 1);
		}
	};

	dfs("", n, n);
	console.log(res);
	return res;
};

generateParenthesis1(3);
