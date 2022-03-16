const loopGetLevel = (obj) => {
	let level = 0;

	const computedLevel = (o, l = 0) => {
		if (typeof o === "object" && o !== null) {
			for (let p in o) {
				if (typeof o[p] === "object" && o[p] !== null) {
					computedLevel(o[p], l + 1);
				} else {
					level = Math.max(l + 1, level);
				}
			}
		} else {
			level = Math.max(l, level);
		}
	};
	computedLevel(obj);
	return level;
};

const obj = {
	a: {b: [1]},
	c: {d: {e: {f: 1}}}
};

console.log(loopGetLevel(obj)); // 4
