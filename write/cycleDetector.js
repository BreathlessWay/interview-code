const cycleDetector = (obj) => {
	const cache = [obj];

	let flag = false;

	const cycle = (o) => {
		if (typeof o === "object" && o !== null) {
			for (let p in o) {
				const item = o[p];
				if (typeof item === "object" && item !== null) {
					if (cache.includes(item)) {
						flag = true;
						return;
					}

					cache.push(item);
					cycle(o[p]);
				}
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
