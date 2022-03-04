class CustomPromise {
	constructor (fun) {
		this.status = "pending";
		this.value = "";
		this.reason = "";
		this.fulfilledcallback = [];
		this.rejectedcallback = [];
		try {
			fun(this.resolve, this.reject);
		} catch (e) {
			this.reject(e);
		}
	}

	static resolve (value) {
		return new CustomPromise((resolve) => resolve(value));
	}

	static reject (error) {
		return new CustomPromise((resolve, reject) => reject(error));
	}

	static all (promises) {
		return new CustomPromise((resolve, reject) => {
			const len = promises.length,
				result = [];

			let index = 0;
			if (!len) {
				resolve(result);
			} else {
				for (let i = 0; i < len; i++) {
					const current = promises[i];

					current.then(res => {
						result[i] = res;
						index++;
						if (index === len) {
							resolve(result);
						}
					}).catch(err => {
						reject(err);
					});
				}
			}
		});
	}

	static race (promises) {
		return new CustomPromise((resolve, reject) => {
				const len = promises.length;

				if (!len) {
					resolve();
				} else {
					for (let i = 0; i < len; i++) {
						promises[i].then(res => {
							resolve(res);
						}).catch(err => {
							reject(err);
						});
					}
				}
			}
		);
	}

	resolve = (value) => {
		if (this.status === "pending") {
			this.status = "fulfilled";
			this.value = value;
			this.reason = "";
			this.fulfilledcallback.forEach(fn => fn(value));
		}
	};

	reject = (error) => {
		if (this.status === "pending") {
			this.status = "rejected";
			this.reason = error;
			this.value = "";
			this.rejectedcallback.forEach(fn => fn(error));
		}
	};

	then = (onFulFilled, onRejected) => {
		if (typeof onFulFilled !== "function") {
			onFulFilled = function (v) {
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
					this.fulfilledcallback.push(() => {
						setTimeout(() => {
							try {
								resolve(onFulFilled(this.value));
							} catch (e) {
								reject(e);
							}
						}, 0);
					});
					this.rejectedcallback.push(() => {
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
							resolve(onFulFilled(this.value));
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
				}
			}
		});
	};

	catch
		= (onRejected) => {
		return this.then(null, onRejected);
	};

	finally
		= (fun) => {
		return this.then((value) => {
			fun();
			return value;
		}, (error) => {
			fun();
			throw error;
		});
	};
}
