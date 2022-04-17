function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const removeNthFromEnd = (list, n) => {
	let first = list,
		second = list;

	while (n) {
		second = second.next;
		n--;
	}

	if (!second) {
		return first.next;
	}

	while (second.next) {
		first = first.next;
		second = second.next;
	}

	first.next = first.next.next;
	return list;
};
