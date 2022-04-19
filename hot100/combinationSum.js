const combinationSum = (candidates, target) => {
	const result = [];
	const dfs = (target, combine, idx) => {
		if (idx === candidates.length) {
			return;
		}

		if (target === 0) {
			result.push(combine);
			return;
		}

		dfs(target, combine, idx + 1);
		if (target - candidates[idx] >= 0) {
			dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
		}
	};

	dfs(target, [], 0);
	console.log(result);
	return result;
};


combinationSum([2, 3, 5], 8);
