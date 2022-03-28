Function.prototype.customBind = function (ctx) {
	if (this === Function.prototype) {
		throw new TypeError("不能直接调用");
	}

	ctx = ctx || window;

	const _this = this;

	return function F () {
		if (this instanceof F) {
			return new _this(...arguments);
		} else {
			return _this.apply(ctx, arguments);
		}
	};
};
