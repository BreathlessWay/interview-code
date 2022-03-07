const deepClone = (obj, cache = new Map()) => {
	if (cache.has(obj)) {
		return cache.get(obj);
	}

	let res;

	if (typeof obj === "function") {
		res = function () {
			return obj.apply(this, arguments);
		};
		cache.set(obj, res);
		return res;
	}

	if (obj instanceof RegExp) {
		res = new RegExp(obj.source, obj.flags);
		cache.set(obj, res);
		return res;
	}

	if (obj instanceof Date) {
		res = new Date(obj);
		cache.set(obj, res);
		return res;
	}

	if (typeof obj === "object" && obj !== null) {
		if (Array.isArray(obj)) {
			res = [];
		} else {
			res = {};
		}

		for (let p in obj) {
			res[p] = deepClone(obj[p], cache);
		}

		cache.set(obj, res);
		return res;
	}

	return obj;
};


const mm = {
	a: 11, b: [{ l: 5 }], c: () => {
	}
};

const nn = deepClone(mm);
mm.b[0].l = "000";
console.log(mm);
console.log(nn);
