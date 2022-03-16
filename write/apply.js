Function.prototype.customApply = function (ctx, args) {
	if (this === Function.prototype) {
		throw new TypeError("不能直接调用");
	}

	ctx = ctx || window;

	ctx.fn = this;

	const res = ctx.fn(...args);

	delete ctx.fn;

	return res;
};
