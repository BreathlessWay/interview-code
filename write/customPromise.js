class CustomPromise {
	constructor (execute) {
		this.status = "pending";
		this.onFulfilledCallback = [];
		this.onRejectedCallback = [];
		this.value = null;
		this.reason = null;

		try {
			execute(this.resolve, this.reject);
		} catch (e) {
			this.reject(e);
		}
	}

	static all = (promises) => {
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
					index++;
					result[i] = res;
					if (index === len) {
						resolve(result);
					}
				}).catch(err => {
					reject(err);
				});
			}
		});
	};

	static race = (promises) => {
		return new CustomPromise((resolve, reject) => {
			const len = promises.length;
			if (!len) {
				resolve();
				return;
			}
			for (let i = 0; i < len; i++) {
				const current = promises[i];
				current.then(res => resolve(res)).catch(err => reject(err));
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

	reject = (error) => {
		if (this.status === "pending") {
			this.status = "rejected";
			this.reason = error;
			this.value = null;
			this.onRejectedCallback.forEach(fn => fn(error));
		}
	};

	then = (onResolve, onReject) => {
		if (typeof onResolve !== "function") {
			onResolve = (v) => v;
		}
		if (typeof onReject !== "function") {
			onReject = error => {
				throw new Error(error);
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
					return;
				}
			}
		});
	};

	catch = (onReject) => {
		return this.then(null, onReject);
	};

	finally = (fn) => {
		return this.then((value) => {
			fn();
			return value;
		}, error => {
			fn();
			throw error;
		});
	};
}

// 用promise race + setTimeout 实现请求超时时间
