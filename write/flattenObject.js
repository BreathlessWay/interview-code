const flattenObject = (obj) => {
	const result = {};

	const dfs = (o, prefix = "") => {
		if (typeof o === "object" && o !== null) {
			for (let p in o) {
				dfs(o[p], `${ prefix }${ prefix ? "." : "" }${ p }`);
			}
		} else {
			result[prefix] = o;
		}
	};

	dfs(obj);
	console.log(result);
	return result;
};

const obj = {
	a: {
		b: 1,
		c: 2,
		d: { e: 5 }
	},
	b: [1, 3, { a: 2, b: 3 }],
	c: 3
};

flattenObject(obj);
