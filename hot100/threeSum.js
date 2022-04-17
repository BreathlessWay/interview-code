/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
	const result = [];
	if (!nums || !nums.length) {
		return result;
	}
	nums.sort((a, b) => a - b); // 排序
	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];
		if (i > 0 && item === nums[i - 1]) {
			continue;
		}
		let left = i + 1,
			right = nums.length - 1;
		while (left < right) {
			const sum = item + nums[left] + nums[right];
			if (sum === 0) {
				result.push([item, nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	console.log(result);
	return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
