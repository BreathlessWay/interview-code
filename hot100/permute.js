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

	const dfs = (index, cache = []) => {
		if (res.length === len) {
			result.push([...res]);
			return;
		}

		for (let i = 0; i < len; i++) {
			if (cache[i]) continue;

			res.push(nums[i]);
			cache[i] = true;

			dfs(index + 1, cache);

			res.pop();
			cache[i] = false;
		}
	};

	dfs(0);
	console.log(result);
	return result;
};

permute([1, 2, 3]);
