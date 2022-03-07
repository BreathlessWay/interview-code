const deepClone = (obj, cache = new Map()) => {

};


const mm = {
	a: 11, b: [{l: 5}], c: () => {
	}
}

const nn = deepClone(mm)
mm.b[0].l = '000'
console.log(mm);
console.log(nn);
