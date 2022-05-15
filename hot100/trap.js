const trap = (heights) => {
	const len = heights.length;

	if (!len) return 0;

	const leftMax = new Array(len).fill(0);
	leftMax[0] = heights[0];

	for (let i = 1; i < len; i++) {
		leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
	}

	const rightMax = new Array(len).fill(0);

	rightMax[len - 1] = heights[len - 1];

	for (let i = len - 2; i >= 0; i--) {
		rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
	}

	let result = 0;

	for (let i = 0; i < len; i++) {
		result += Math.min(leftMax[i], rightMax[i]) - heights[i];
	}

	console.log(leftMax, rightMax, result);
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
