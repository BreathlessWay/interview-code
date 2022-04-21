class CustomPromise {
	constructor(execute) {
		this.result = null;
		this.resaon = null;
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
			if (!promises.length) {
				resolve([]);
				return;
			}
			let result = [],
				count = 0;

			for (let i = 0; i < promises.length; i++) {
				promises[i].then(res => {
					result[i] = res;
					count++;
					if (count === promises.length) {
						resolve(result);
					}
				}).catch(error => {
					reject(error);
				});
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
		if (this.status === "pending") {
			this.status = "fulfilled";
			this.result = value;
			this.reason = null;
			this.onFulfilledCallback.forEach(fn => fn(value));
		}
	};

	reject = (error) => {
		if (this.status === "pending") {
			this.status = "rejected";
			this.result = null;
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
			onReject = function (err) {
				throw err;
			};
		}

		return new CustomPromise((resolve, reject) => {
			switch (this.status) {
				case "pending": {
					this.onFulfilledCallback.push(() => {
						setTimeout(() => {
							try {
								resolve(onResolve(this.result));
							} catch (e) {
								reject(e);
							}
						});
					});
					this.onRejectedCallback.push(() => {
						setTimeout(() => {
							try {
								reject(onReject(this.reason));
							} catch (e) {
								reject(e);
							}
						});
					});
					return;
				}
				case "fulfilled": {
					setTimeout(() => {
						try {
							resolve(onResolve(this.result));
						} catch (e) {
							reject(e);
						}
					});
					return;
				}
				case "rejected": {
					setTimeout(() => {
						try {
							reject(onReject(this.reason));
						} catch (e) {
							reject(e);
						}
					});
				}
			}
		});
	};

	catch = (onReject) => {
		return this.then(null, onReject);
	};

	finally = (fn) => {
		return this.then((res) => {
			fn();
			return res;
		}, (error) => {
			fn();
			throw error;
		});
	};
}

// 用promise race + setTimeout 实现请求超时时间
