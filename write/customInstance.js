const customInstance = (target, source) => {
	let proto = target.__proto__;

	while (true) {
		if (proto === source.prototype) {
			return true;
		}
		proto = proto.__proto__;

		if (!proto) {
			return false;
		}
	}
};
