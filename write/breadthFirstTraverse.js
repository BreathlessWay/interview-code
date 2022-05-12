const breadthFirstTraverse = (json) => {
	const queue = [json];

	while (queue.length) {
		const current = queue.pop();
		if (current === void 0) break;

		console.log(current);

		const children = current.children;

		if (children.length) {
			children.forEach(child => queue.push(child));
		}
	}
};
