const flattenObject = (obj) => {

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
