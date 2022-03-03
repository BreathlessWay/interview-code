// 防抖 执行最后一次

const debounce = (fn, ms = 500) => {
	let time;

	return (...args) => {
		if (time) {
			clearTimeout(time);
			time = null;
		}

		setTimeout(() => {
			fn.apply(this, args);
		}, ms);
	};
};
