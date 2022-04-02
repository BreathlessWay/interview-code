const cycleDetector = (obj) => {
	const cache = [obj];

	let flag = false;

	const cycle = (o) => {
		if (typeof o === "object" && o !== null) {
			for (let p in o) {
				if (typeof o[p] === "object" && o[p] !== null) {
					if (cache.includes(o[p])) {
						flag = true;
						return;
					}

					cache.push(o[p]);
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
