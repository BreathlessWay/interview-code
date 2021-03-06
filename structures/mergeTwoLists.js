const mergeTwoLists = (list1, list2) => {

	const res = {
		val: 0,
		next: null
	};

	let p = res,
		p1 = list1,
		p2 = list2;

	while (p1 && p2) {
		if (p1.val < p2.val) {
			p.next = p1;
			p1 = p1.next;
		} else {
			p.next = p2;
			p2 = p2.next;
		}

		p = p.next;
	}

	if (p1) {
		p.next = p1;
	}
	if (p2) {
		p.next = p2;
	}

	return res.next;
};
