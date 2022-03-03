// 节流 执行第一次

const throttle = (fn, ms = 20) => {
	let flag = false;

	return (...args) => {
		if (flag) return;
		flag = true;
		setTimeout(() => {
			fn.apply(this, args);
			flag = false;
		}, ms);
	};
};
