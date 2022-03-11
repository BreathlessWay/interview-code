const templateRender = (str, json) => {
	const result = str.replace(/\{\{(\w+)\}\}/g, (match, char) => {
		return json[char];
	});
	console.log(result);
};

templateRender("我是{{name}}，年龄{{age}}，性别{{sex}}", {
	name: "姓名",
	age: 18
});
