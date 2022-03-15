class CustomPromise {
	constructor(execute) {
		this.value = null;
		this.reason = null;
		this.status = "pending";
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
			const len = promises.length;

			if (!len) {
				resolve([]);
				return;
			}

			let result = [], index = 0;
			for (let i = 0; i < len; i++) {
				const current = promises[i];
				current.then(res => {
					result[i] = res;
					index++;
					if (index === len) {
						resolve(result);
					}
				})
					.catch(err => {
						reject(err);
					});
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
			this.reason = null;
			this.value = value;
			this.onFulfilledCallback.forEach(fn => fn(value));
		}
	};

	reject = (reason) => {
		if (this.status === "pending") {
			this.status = "rejected";
			this.reason = reason;
			this.value = null;
			this.onRejectedCallback.forEach(fn => fn(reason));
		}
	};

	then = (onFulfilled, onRejected) => {
		if (typeof onFulfilled !== "function") {
			onFulfilled = function (v) {
				return v;
			};
		}
		if (typeof onRejected !== "function") {
			onRejected = function (err) {
				throw err;
			};
		}
		return new CustomPromise((resolve, reject) => {
			switch (this.status) {
				case "pending": {
					this.onFulfilledCallback.push(() => {
						setTimeout(() => {
							try {
								resolve(onFulfilled(this.value));
							} catch (e) {
								reject(e);
							}
						}, 0);
					});
					this.onRejectedCallback.push(() => {
						setTimeout(() => {
							try {
								reject(onRejected(this.reason));
							} catch (e) {
								reject(e);
							}
						}, 0);
					});
					break;
				}
				case "fulfilled": {
					setTimeout(() => {
						try {
							resolve(onFulfilled(this.value));
						} catch (e) {
							reject(e);
						}
					}, 0);
					break;
				}
				case "rejected": {
					setTimeout(() => {
						try {
							reject(onRejected(this.reason));
						} catch (e) {
							reject(e);
						}
					}, 0);
					break;
				}
			}
		});
	};

	catch = (onReject) => {
		return this.then(null, onReject);
	};

	finally = (fn) => {
		return this.then((v) => {
			fn();
			return v;
		}, (error) => {
			fn();
			throw error;
		});
	};
}

// 用promise race + setTimeout 实现请求超时时间
