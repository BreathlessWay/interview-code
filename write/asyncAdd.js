const asyncAdd = (a, b, cb) => {
	setTimeout(() => {
		cb(null, a + b);
	}, 500);
};

const promiseAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		asyncAdd(a, b, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		});
	});
};

const serialSum = async (...args) => {
	return args.reduce((previousValue, currentValue) => {
		return previousValue.then(res => promiseAdd(res, currentValue));
	}, Promise.resolve(0));
};

serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12).then(res => {
	console.log(res);
});

const parallelSum = async (...args) => {
	if (args.length === 1) return args[0];
	const task = [];
	for (let i = 0; i < args.length; i += 2) {
		task.push(promiseAdd(args[i], args[i + 1] || 0));
	}
	const result = await Promise.all(task);
	return parallelSum(...result);
};

parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12).then(res => {
	console.log(res);
});
