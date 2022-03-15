const flattenObject = (obj) => {
	const result = {};
	if (typeof obj === "object" && obj !== null) {
		const dfs = (cur, prefix = "") => {
			if (typeof cur === "object" && cur !== null) {
				for (let p in cur) {
					dfs(cur[p], `${prefix}${prefix ? "." : ""}${p}`);
				}
			} else {
				result[prefix] = cur;
			}
		};
		dfs(obj);
	}

	console.log(result);
	return result;
};

const obj = {
	a: {
		b: 1,
		c: 2,
		d: {e: 5}
	},
	b: [1, 3, {a: 2, b: 3}],
	c: 3
};

flattenObject(obj);
