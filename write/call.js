Function.prototype.customCall = function (ctx, ...args) {
	if (this === Function.prototype) {
		throw new TypeError("禁止直接调用");
	}

	const _this = ctx || window;

	_this.fn = this;

	const res = _this.fn(...args);

	delete _this.fn;

	return res;
};
