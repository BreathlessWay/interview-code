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

	static resolve(value) {
		const promise = new CustomPromise((resolve, reject) => {
			resolvePromise(promise, value, resolve, reject);
		});

		return promise;
	}

	static reject(error) {
		return new CustomPromise((resolve, reject) => {
			reject(error);
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

		const promise2 = new CustomPromise((resolve, reject) => {
			switch (this.status) {
				case "Pending": {
					this.onFulfilledCallback.push((v) => {
						setTimeout(() => {
							try {
								// resolve(onResolve(v));
								resolvePromise(promise2, onResolve(v), resolve, reject);
							} catch (e) {
								reject(e);
							}
						});
					});
					this.onRejectedCallback.push((err) => {
						setTimeout(() => {
							try {
								// reject(onReject(err));
								resolvePromise(promise2, onReject(err), resolve, reject);
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
							// resolve(onResolve(this.result));
							resolvePromise(promise2, onResolve(this.result), resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
					break;
				}
				case "Rejected": {
					setTimeout(() => {
						try {
							// reject(onReject(this.reason));
							resolvePromise(promise2, onReject(this.reason), resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
					break;
				}
			}
		});
		return promise2;
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

const resolvePromise = (promise2, x, resolve, reject) => {
	if (promise2 === x) return reject(new TypeError(""));
	if (x instanceof CustomPromise) {
		if (x.status === "Pending") {
			x.then(v => resolvePromise(promise2, v, resolve, reject), reject);
		} else {
			x.then(resolve, reject);
		}
		return;
	}
	if (x !== null && (typeof x === "object" || typeof x === "function")) {
		let called = false;
		try {
			const then = x.then;

			if (typeof then === "function") {
				then.call(x, v => {
					if (called) return;
					called = true;
					resolvePromise(promise2, v, resolve, reject);
				}, e => {
					if (called) return;
					called = true;
					reject(e);
				});
			} else {
				if (called) return;
				called = true;
				resolve(x);
			}
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		resolve(x);
	}
};

// 用promise race + setTimeout 实现请求超时时间
