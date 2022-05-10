class CustomPromise {
	constructor(execute) {
		this.result = null;
		this.reason = null;
		this.status = "Pending";
		this.onFulfilledCallback = [];
		this.onRejectedCallback = [];

		try {
			execute(this.resolve, this.reject);
		} catch (e) {
			this.reject(e);
		}
	}

	static all(promises) {
		return new CustomPromise((resolve, reject) => {
			if (!promises.length) {
				resolve([]);
			} else {
				let result = [],
					count = 0;

				for (let i = 0; i < promises.length; i++) {
					promises[i]
						.then(res => {
							result[i] = res;
							count++;
							if (count === promises.length) {
								resolve(result);
							}
						})
						.catch(err => {
							reject(err);
						});
				}
			}
		});
	}

	static race(promises) {
		return new CustomPromise((resolve, reject) => {
			if (!promises.length) {
				resolve(null);
				return;
			}
			for (let i = 0; i < promises.length; i++) {
				promises[i].then(res => {
					resolve(result);
				}).catch(error => {
					reject(error);
				});
			}
		});
	}

	resolve = (value) => {
		if (this.status === "Pending") {
			this.status = "Fulfilled";
			this.reason = null;
			this.result = value;
			this.onFulfilledCallback.forEach(fn => fn(value));
		}
	};

	reject = (error) => {
		if (this.status === "Pending") {
			this.status = "Rejected";
			this.reason = error;
			this.result = null;
			this.onRejectedCallback.forEach(fn => fn(error));
		}
	};

	then = (onResolve, onReject) => {
		if (typeof onReject !== "function") {
			onResolve = function (v) {
				return v;
			};
		}
		if (typeof onReject !== "function") {
			onReject = function (err) {
				throw err;
			};
		}

		return new CustomPromise((resolve, reject) => {
			switch (this.status) {
				case "Pending": {
					this.onFulfilledCallback.push((v) => {
						setTimeout(() => {
							try {
								resolve(onResolve(v));
							} catch (e) {
								reject(e);
							}
						});
					});
					this.onRejectedCallback.push((err) => {
						setTimeout(() => {
							try {
								reject(onReject(err));
							} catch (e) {
								reject(e);
							}
						});
					});
					break;
				}
				case "Fulfilled": {
					setTimeout(() => {
						try {
							resolve(onResolve(this.result));
						} catch (e) {
							reject(e);
						}
					});
					break;
				}
				case "Rejected": {
					setTimeout(() => {
						try {
							reject(onReject(this.reason));
						} catch (e) {
							reject(e);
						}
					});
					break;
				}
			}
		});
	};

	catch = (onReject) => {
		return this.then(null, onReject);
	};

	finally = (fn) => {
		this.then(val => {
			fn();
			return val;
		}, err => {
			fn();
			throw err;
		});
	};
}

// 用promise race + setTimeout 实现请求超时时间
