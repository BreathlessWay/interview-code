const twoSum = function (nums, target) {
	const map = new Map();
	let res;
	for (let i = 0; i < nums.length; i++) {
		const item = nums[i],
			diff = target - item;
		if (map.has(diff)) {
			res = [map.get(diff), i];
			return res;
		} else {
			map.set(item, i);
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9));
