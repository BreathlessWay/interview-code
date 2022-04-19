const search = (nums, target) => {
	const len = nums.length;
	if (len < 0) {
		return -1;
	}

	if (len === 1) {
		return nums[0] === target ? 0 : -1;
	}

	let left = 0, right = len - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		}

		if (nums[0] <= nums[mid]) {
			if (target >= nums[0] && nums[mid] > target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (target > nums[mid] && nums[len - 1] >= target) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
};

console.log(search([1, 3], 1));
