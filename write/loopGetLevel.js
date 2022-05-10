const loopGetLevel = (obj) => {
	let level = 0;

	const loop = (o, l = 0) => {
		if (typeof o === "object" && o) {
			for (let p in o) {
				loop(o[p], l + 1);
			}
		} else {
			level = Math.max(level, l);
		}
	};

	loop(obj);
	console.log(level);
	return level;
};

const obj = {
	a: {b: [1]}, c: {d: {e: {f: 1}}}
};

loopGetLevel(obj);
