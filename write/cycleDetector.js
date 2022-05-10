const cycleDetector = (obj) => {
	const cache = new Set();

	let flag = false;

	const cycle = (o) => {
		if (typeof o === "object" && o) {
			if (cache.has(o)) {
				flag = true;
				return flag;
			}
			cache.add(o);
			for (let p in o) {
				cycle(o[p]);
			}
		}
	};

	cycle(obj);

	return flag;
};

const obj = {
	a: {
		c: [
			1, 2
		]
	},
	b: 1
};
obj.d = obj;
console.log(cycleDetector(obj)); // true
