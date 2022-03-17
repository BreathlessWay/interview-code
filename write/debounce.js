// 防抖 执行最后一次

const debounce = (fn, ms = 500) => {
	let time = null;

	return function (...args) {
		if (time) {
			clearTimeout(time);
			time = null;
		}

		time = setTimeout(() => {
			fn.apply(this, args);
			time = null;
		}, ms);
	};
};
