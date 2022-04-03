const run = (arr) => {
	return arr.reduce((pre, next) => {
		const first = Array.isArray(pre) ? run(pre) : pre,
			last = Array.isArray(next) ? run(next) : next;
		return first - last;
	});
};

console.log(run([5, [[4, 3], 2, 1]]));
