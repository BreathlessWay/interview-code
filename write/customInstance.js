const customInstance = (source, target) => {
	let proto = source.__proto__;

	while (true) {
		if (proto === target.prototype) {
			return true;
		}
		proto = proto.__proto__;
		if (!proto) {
			return false;
		}
	}
};
