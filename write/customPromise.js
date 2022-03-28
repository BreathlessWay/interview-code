class CustomPromise {
	constructor (execute) {
		this.value = null;
		this.reason = null;
		this.onFulfilledCallback = [];
		this.onRejectedCallback = [];
		this.status = "pending";

		try {
			execute(this.resolve, this.reject);
		} catch (e) {
			this.reject(e);
		}
	}

	static all (promises) {
		return new CustomPromise((resolve, reject) => {
			if (promises.length) {
				let index = 0, result = [];

				for (let i = 0; i < promises.length; i++) {
					promises[i].then(res => {
						result[i] = res;
						index++;
						if (index === promises.length) {
							resolve(result);
						}
					}).catch(error => {
						reject(error);
					});
				}
			} else {
				resolve([]);
			}
		});
	}

	static race = (promises) => {
		return new CustomPromise((resolve, reject) => {
			const len = promises.length;
			if (!len) {
				resolve();
				return;
			}
			for (let i = 0; i < len; i++) {
				promises[i].then(res => {
					resolve(res);
				}).catch(err => {
					reject(err);
				});
			}
		});
	};

	resolve = (value) => {
		if (this.status === "pending") {
			this.status = "fulfilled";
			this.value = value;
			this.reason = null;
			this.onFulfilledCallback.forEach(fn => fn(value));
		}
	};

	reject = (error) => {
		if (this.status === "pending") {
			this.status = "rejected";
			this.value = null;
			this.reason = error;
			this.onRejectedCallback.forEach(fn => fn(error));
		}
	};

	then = (onResolve, onReject) => {
		if (typeof onResolve !== "function") {
			onResolve = function (v) {
				return v;
			};
		}

		if (typeof onReject !== "function") {
			onReject = function (error) {
				throw error;
			};
		}

		return new CustomPromise((resolve, reject) => {
			switch (this.status) {
				case "pending": {
					this.onFulfilledCallback.push(() => {
						setTimeout(() => {
							try {
								resolve(onResolve(this.value));
							} catch (e) {
								reject(e);
							}
						}, 0);
					});
					this.onRejectedCallback.push(() => {
						setTimeout(() => {
							try {
								reject(onReject(this.reason));
							} catch (e) {
								reject(e);
							}
						}, 0);
					});
					return;
				}
				case "fulfilled": {
					setTimeout(() => {
						try {
							resolve(onResolve(this.value));
						} catch (e) {
							reject(e);
						}
					}, 0);
					return;
				}
				case "rejected": {
					setTimeout(() => {
						try {
							reject(onReject(this.reason));
						} catch (e) {
							reject(e);
						}
					}, 0);
				}
			}
		});
	};

	catch = (onReject) => {
		return this.then(null, onReject);
	};

	finally = (fn) => {
		return this.then(res => {
			fn();
			return res;
		}, error => {
			fn();
			throw error;
		});
	};
}

// 用promise race + setTimeout 实现请求超时时间
