const flattenObject = (obj) => {
	const res = {};

	const dfs = (o, prefix = "") => {
		if (typeof o === "object" && o !== null) {
			for (let p in o) {
				dfs(o[p], `${ prefix }${ prefix ? "." : "" }${ p }`);
			}
		} else {
			res[prefix] = o;
		}
	};
	dfs(obj);
	console.log(res);
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
