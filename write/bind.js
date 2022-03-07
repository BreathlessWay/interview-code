Function.prototype.customBind = function (ctx) {
	if (this === Function.prototype) {
		throw new TypeError("禁止直接调用");
	}

	const _this = this;

	return function F () {
		if (this instanceof F) {
			return new _this(...arguments);
		}

		return _this.apply(ctx, arguments);
	};
};
