const loopGetLevel = (obj) => {
	let level = 0;

	const loop = (o, lev = 0) => {
		if (typeof o === "object" && o !== null) {
			for (let p in o) {
				loop(o[p], lev + 1);
			}
		} else {
			level = Math.max(lev, level);
		}
	};

	loop(obj);

	return level;
};

const obj = {
	a: { b: [1] },
	c: { d: { e: { f: 1 } } }
};

console.log(loopGetLevel(obj)); // 4
