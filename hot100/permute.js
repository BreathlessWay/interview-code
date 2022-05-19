/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
	const result = [],
		len = nums.length,
		res = [];

	if (!len) return [];
	if (len === 1) return [nums];

	const dfs = (cache = []) => {
		if (res.length === len) {
			result.push([...res]);
			return;
		}

		for (let i = 0; i < len; i++) {
			if (cache[i]) continue;

			res.push(nums[i]);
			cache[i] = true;

			dfs(cache);

			res.pop();
			cache[i] = false;
		}
	};

	dfs();
	console.log(result);
	return result;
};

permute([1, 2, 3]);
