const customInstance = (source, target) => {
	let proto = source.__proto__;

	while (proto !== target.prototype) {
		proto = proto.__proto__;
		if (!proto) {
			return false;
		}
	}

	return true;
};
